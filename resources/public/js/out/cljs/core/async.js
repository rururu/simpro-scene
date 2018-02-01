// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23450 = [];
var len__20407__auto___23456 = arguments.length;
var i__20408__auto___23457 = (0);
while(true){
if((i__20408__auto___23457 < len__20407__auto___23456)){
args23450.push((arguments[i__20408__auto___23457]));

var G__23458 = (i__20408__auto___23457 + (1));
i__20408__auto___23457 = G__23458;
continue;
} else {
}
break;
}

var G__23452 = args23450.length;
switch (G__23452) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23450.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23453 = (function (f,blockable,meta23454){
this.f = f;
this.blockable = blockable;
this.meta23454 = meta23454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23455,meta23454__$1){
var self__ = this;
var _23455__$1 = this;
return (new cljs.core.async.t_cljs$core$async23453(self__.f,self__.blockable,meta23454__$1));
});

cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23455){
var self__ = this;
var _23455__$1 = this;
return self__.meta23454;
});

cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23454","meta23454",1805906588,null)], null);
});

cljs.core.async.t_cljs$core$async23453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23453";

cljs.core.async.t_cljs$core$async23453.cljs$lang$ctorPrWriter = (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async23453");
});

cljs.core.async.__GT_t_cljs$core$async23453 = (function cljs$core$async$__GT_t_cljs$core$async23453(f__$1,blockable__$1,meta23454){
return (new cljs.core.async.t_cljs$core$async23453(f__$1,blockable__$1,meta23454));
});

}

return (new cljs.core.async.t_cljs$core$async23453(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23462 = [];
var len__20407__auto___23465 = arguments.length;
var i__20408__auto___23466 = (0);
while(true){
if((i__20408__auto___23466 < len__20407__auto___23465)){
args23462.push((arguments[i__20408__auto___23466]));

var G__23467 = (i__20408__auto___23466 + (1));
i__20408__auto___23466 = G__23467;
continue;
} else {
}
break;
}

var G__23464 = args23462.length;
switch (G__23464) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23462.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args23469 = [];
var len__20407__auto___23472 = arguments.length;
var i__20408__auto___23473 = (0);
while(true){
if((i__20408__auto___23473 < len__20407__auto___23472)){
args23469.push((arguments[i__20408__auto___23473]));

var G__23474 = (i__20408__auto___23473 + (1));
i__20408__auto___23473 = G__23474;
continue;
} else {
}
break;
}

var G__23471 = args23469.length;
switch (G__23471) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23469.length)].join('')));

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
var args23476 = [];
var len__20407__auto___23479 = arguments.length;
var i__20408__auto___23480 = (0);
while(true){
if((i__20408__auto___23480 < len__20407__auto___23479)){
args23476.push((arguments[i__20408__auto___23480]));

var G__23481 = (i__20408__auto___23480 + (1));
i__20408__auto___23480 = G__23481;
continue;
} else {
}
break;
}

var G__23478 = args23476.length;
switch (G__23478) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23476.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23483 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23483);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23483,ret){
return (function (){
return fn1.call(null,val_23483);
});})(val_23483,ret))
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
var args23484 = [];
var len__20407__auto___23487 = arguments.length;
var i__20408__auto___23488 = (0);
while(true){
if((i__20408__auto___23488 < len__20407__auto___23487)){
args23484.push((arguments[i__20408__auto___23488]));

var G__23489 = (i__20408__auto___23488 + (1));
i__20408__auto___23488 = G__23489;
continue;
} else {
}
break;
}

var G__23486 = args23484.length;
switch (G__23486) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23484.length)].join('')));

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
var n__20217__auto___23491 = n;
var x_23492 = (0);
while(true){
if((x_23492 < n__20217__auto___23491)){
(a[x_23492] = (0));

var G__23493 = (x_23492 + (1));
x_23492 = G__23493;
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

var G__23494 = (i + (1));
i = G__23494;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23498 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23498 = (function (flag,meta23499){
this.flag = flag;
this.meta23499 = meta23499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23500,meta23499__$1){
var self__ = this;
var _23500__$1 = this;
return (new cljs.core.async.t_cljs$core$async23498(self__.flag,meta23499__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23500){
var self__ = this;
var _23500__$1 = this;
return self__.meta23499;
});})(flag))
;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23498.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23499","meta23499",-863303415,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23498.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23498";

cljs.core.async.t_cljs$core$async23498.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async23498");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23498 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23498(flag__$1,meta23499){
return (new cljs.core.async.t_cljs$core$async23498(flag__$1,meta23499));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23498(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23504 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23504 = (function (flag,cb,meta23505){
this.flag = flag;
this.cb = cb;
this.meta23505 = meta23505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23506,meta23505__$1){
var self__ = this;
var _23506__$1 = this;
return (new cljs.core.async.t_cljs$core$async23504(self__.flag,self__.cb,meta23505__$1));
});

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23506){
var self__ = this;
var _23506__$1 = this;
return self__.meta23505;
});

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23505","meta23505",-2138024241,null)], null);
});

cljs.core.async.t_cljs$core$async23504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23504";

cljs.core.async.t_cljs$core$async23504.cljs$lang$ctorPrWriter = (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async23504");
});

cljs.core.async.__GT_t_cljs$core$async23504 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23504(flag__$1,cb__$1,meta23505){
return (new cljs.core.async.t_cljs$core$async23504(flag__$1,cb__$1,meta23505));
});

}

return (new cljs.core.async.t_cljs$core$async23504(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__23507_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23507_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23508_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23508_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19294__auto__ = wport;
if(cljs.core.truth_(or__19294__auto__)){
return or__19294__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23509 = (i + (1));
i = G__23509;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19294__auto__ = ret;
if(cljs.core.truth_(or__19294__auto__)){
return or__19294__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__19282__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19282__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19282__auto__;
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
var args__20414__auto__ = [];
var len__20407__auto___23515 = arguments.length;
var i__20408__auto___23516 = (0);
while(true){
if((i__20408__auto___23516 < len__20407__auto___23515)){
args__20414__auto__.push((arguments[i__20408__auto___23516]));

var G__23517 = (i__20408__auto___23516 + (1));
i__20408__auto___23516 = G__23517;
continue;
} else {
}
break;
}

var argseq__20415__auto__ = ((((1) < args__20414__auto__.length))?(new cljs.core.IndexedSeq(args__20414__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20415__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23512){
var map__23513 = p__23512;
var map__23513__$1 = ((((!((map__23513 == null)))?((((map__23513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23513):map__23513);
var opts = map__23513__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23510){
var G__23511 = cljs.core.first.call(null,seq23510);
var seq23510__$1 = cljs.core.next.call(null,seq23510);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23511,seq23510__$1);
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
var args23518 = [];
var len__20407__auto___23568 = arguments.length;
var i__20408__auto___23569 = (0);
while(true){
if((i__20408__auto___23569 < len__20407__auto___23568)){
args23518.push((arguments[i__20408__auto___23569]));

var G__23570 = (i__20408__auto___23569 + (1));
i__20408__auto___23569 = G__23570;
continue;
} else {
}
break;
}

var G__23520 = args23518.length;
switch (G__23520) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23518.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23405__auto___23572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___23572){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___23572){
return (function (state_23544){
var state_val_23545 = (state_23544[(1)]);
if((state_val_23545 === (7))){
var inst_23540 = (state_23544[(2)]);
var state_23544__$1 = state_23544;
var statearr_23546_23573 = state_23544__$1;
(statearr_23546_23573[(2)] = inst_23540);

(statearr_23546_23573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (1))){
var state_23544__$1 = state_23544;
var statearr_23547_23574 = state_23544__$1;
(statearr_23547_23574[(2)] = null);

(statearr_23547_23574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (4))){
var inst_23523 = (state_23544[(7)]);
var inst_23523__$1 = (state_23544[(2)]);
var inst_23524 = (inst_23523__$1 == null);
var state_23544__$1 = (function (){var statearr_23548 = state_23544;
(statearr_23548[(7)] = inst_23523__$1);

return statearr_23548;
})();
if(cljs.core.truth_(inst_23524)){
var statearr_23549_23575 = state_23544__$1;
(statearr_23549_23575[(1)] = (5));

} else {
var statearr_23550_23576 = state_23544__$1;
(statearr_23550_23576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (13))){
var state_23544__$1 = state_23544;
var statearr_23551_23577 = state_23544__$1;
(statearr_23551_23577[(2)] = null);

(statearr_23551_23577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (6))){
var inst_23523 = (state_23544[(7)]);
var state_23544__$1 = state_23544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23544__$1,(11),to,inst_23523);
} else {
if((state_val_23545 === (3))){
var inst_23542 = (state_23544[(2)]);
var state_23544__$1 = state_23544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23544__$1,inst_23542);
} else {
if((state_val_23545 === (12))){
var state_23544__$1 = state_23544;
var statearr_23552_23578 = state_23544__$1;
(statearr_23552_23578[(2)] = null);

(statearr_23552_23578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (2))){
var state_23544__$1 = state_23544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23544__$1,(4),from);
} else {
if((state_val_23545 === (11))){
var inst_23533 = (state_23544[(2)]);
var state_23544__$1 = state_23544;
if(cljs.core.truth_(inst_23533)){
var statearr_23553_23579 = state_23544__$1;
(statearr_23553_23579[(1)] = (12));

} else {
var statearr_23554_23580 = state_23544__$1;
(statearr_23554_23580[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (9))){
var state_23544__$1 = state_23544;
var statearr_23555_23581 = state_23544__$1;
(statearr_23555_23581[(2)] = null);

(statearr_23555_23581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (5))){
var state_23544__$1 = state_23544;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23556_23582 = state_23544__$1;
(statearr_23556_23582[(1)] = (8));

} else {
var statearr_23557_23583 = state_23544__$1;
(statearr_23557_23583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (14))){
var inst_23538 = (state_23544[(2)]);
var state_23544__$1 = state_23544;
var statearr_23558_23584 = state_23544__$1;
(statearr_23558_23584[(2)] = inst_23538);

(statearr_23558_23584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (10))){
var inst_23530 = (state_23544[(2)]);
var state_23544__$1 = state_23544;
var statearr_23559_23585 = state_23544__$1;
(statearr_23559_23585[(2)] = inst_23530);

(statearr_23559_23585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23545 === (8))){
var inst_23527 = cljs.core.async.close_BANG_.call(null,to);
var state_23544__$1 = state_23544;
var statearr_23560_23586 = state_23544__$1;
(statearr_23560_23586[(2)] = inst_23527);

(statearr_23560_23586[(1)] = (10));


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
});})(c__23405__auto___23572))
;
return ((function (switch__23293__auto__,c__23405__auto___23572){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_23564 = [null,null,null,null,null,null,null,null];
(statearr_23564[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_23564[(1)] = (1));

return statearr_23564;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_23544){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_23544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e23565){if((e23565 instanceof Object)){
var ex__23297__auto__ = e23565;
var statearr_23566_23587 = state_23544;
(statearr_23566_23587[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23588 = state_23544;
state_23544 = G__23588;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_23544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_23544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___23572))
})();
var state__23407__auto__ = (function (){var statearr_23567 = f__23406__auto__.call(null);
(statearr_23567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___23572);

return statearr_23567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___23572))
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
return (function (p__23776){
var vec__23777 = p__23776;
var v = cljs.core.nth.call(null,vec__23777,(0),null);
var p = cljs.core.nth.call(null,vec__23777,(1),null);
var job = vec__23777;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23405__auto___23963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___23963,res,vec__23777,v,p,job,jobs,results){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___23963,res,vec__23777,v,p,job,jobs,results){
return (function (state_23784){
var state_val_23785 = (state_23784[(1)]);
if((state_val_23785 === (1))){
var state_23784__$1 = state_23784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23784__$1,(2),res,v);
} else {
if((state_val_23785 === (2))){
var inst_23781 = (state_23784[(2)]);
var inst_23782 = cljs.core.async.close_BANG_.call(null,res);
var state_23784__$1 = (function (){var statearr_23786 = state_23784;
(statearr_23786[(7)] = inst_23781);

return statearr_23786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23784__$1,inst_23782);
} else {
return null;
}
}
});})(c__23405__auto___23963,res,vec__23777,v,p,job,jobs,results))
;
return ((function (switch__23293__auto__,c__23405__auto___23963,res,vec__23777,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0 = (function (){
var statearr_23790 = [null,null,null,null,null,null,null,null];
(statearr_23790[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__);

(statearr_23790[(1)] = (1));

return statearr_23790;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1 = (function (state_23784){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_23784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e23791){if((e23791 instanceof Object)){
var ex__23297__auto__ = e23791;
var statearr_23792_23964 = state_23784;
(statearr_23792_23964[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23965 = state_23784;
state_23784 = G__23965;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = function(state_23784){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1.call(this,state_23784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___23963,res,vec__23777,v,p,job,jobs,results))
})();
var state__23407__auto__ = (function (){var statearr_23793 = f__23406__auto__.call(null);
(statearr_23793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___23963);

return statearr_23793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___23963,res,vec__23777,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23794){
var vec__23795 = p__23794;
var v = cljs.core.nth.call(null,vec__23795,(0),null);
var p = cljs.core.nth.call(null,vec__23795,(1),null);
var job = vec__23795;
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
var n__20217__auto___23966 = n;
var __23967 = (0);
while(true){
if((__23967 < n__20217__auto___23966)){
var G__23798_23968 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23798_23968) {
case "compute":
var c__23405__auto___23970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23967,c__23405__auto___23970,G__23798_23968,n__20217__auto___23966,jobs,results,process,async){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (__23967,c__23405__auto___23970,G__23798_23968,n__20217__auto___23966,jobs,results,process,async){
return (function (state_23811){
var state_val_23812 = (state_23811[(1)]);
if((state_val_23812 === (1))){
var state_23811__$1 = state_23811;
var statearr_23813_23971 = state_23811__$1;
(statearr_23813_23971[(2)] = null);

(statearr_23813_23971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (2))){
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23811__$1,(4),jobs);
} else {
if((state_val_23812 === (3))){
var inst_23809 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23811__$1,inst_23809);
} else {
if((state_val_23812 === (4))){
var inst_23801 = (state_23811[(2)]);
var inst_23802 = process.call(null,inst_23801);
var state_23811__$1 = state_23811;
if(cljs.core.truth_(inst_23802)){
var statearr_23814_23972 = state_23811__$1;
(statearr_23814_23972[(1)] = (5));

} else {
var statearr_23815_23973 = state_23811__$1;
(statearr_23815_23973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (5))){
var state_23811__$1 = state_23811;
var statearr_23816_23974 = state_23811__$1;
(statearr_23816_23974[(2)] = null);

(statearr_23816_23974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (6))){
var state_23811__$1 = state_23811;
var statearr_23817_23975 = state_23811__$1;
(statearr_23817_23975[(2)] = null);

(statearr_23817_23975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23812 === (7))){
var inst_23807 = (state_23811[(2)]);
var state_23811__$1 = state_23811;
var statearr_23818_23976 = state_23811__$1;
(statearr_23818_23976[(2)] = inst_23807);

(statearr_23818_23976[(1)] = (3));


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
});})(__23967,c__23405__auto___23970,G__23798_23968,n__20217__auto___23966,jobs,results,process,async))
;
return ((function (__23967,switch__23293__auto__,c__23405__auto___23970,G__23798_23968,n__20217__auto___23966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0 = (function (){
var statearr_23822 = [null,null,null,null,null,null,null];
(statearr_23822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__);

(statearr_23822[(1)] = (1));

return statearr_23822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1 = (function (state_23811){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_23811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e23823){if((e23823 instanceof Object)){
var ex__23297__auto__ = e23823;
var statearr_23824_23977 = state_23811;
(statearr_23824_23977[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23978 = state_23811;
state_23811 = G__23978;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = function(state_23811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1.call(this,state_23811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__;
})()
;})(__23967,switch__23293__auto__,c__23405__auto___23970,G__23798_23968,n__20217__auto___23966,jobs,results,process,async))
})();
var state__23407__auto__ = (function (){var statearr_23825 = f__23406__auto__.call(null);
(statearr_23825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___23970);

return statearr_23825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(__23967,c__23405__auto___23970,G__23798_23968,n__20217__auto___23966,jobs,results,process,async))
);


break;
case "async":
var c__23405__auto___23979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23967,c__23405__auto___23979,G__23798_23968,n__20217__auto___23966,jobs,results,process,async){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (__23967,c__23405__auto___23979,G__23798_23968,n__20217__auto___23966,jobs,results,process,async){
return (function (state_23838){
var state_val_23839 = (state_23838[(1)]);
if((state_val_23839 === (1))){
var state_23838__$1 = state_23838;
var statearr_23840_23980 = state_23838__$1;
(statearr_23840_23980[(2)] = null);

(statearr_23840_23980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (2))){
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23838__$1,(4),jobs);
} else {
if((state_val_23839 === (3))){
var inst_23836 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23838__$1,inst_23836);
} else {
if((state_val_23839 === (4))){
var inst_23828 = (state_23838[(2)]);
var inst_23829 = async.call(null,inst_23828);
var state_23838__$1 = state_23838;
if(cljs.core.truth_(inst_23829)){
var statearr_23841_23981 = state_23838__$1;
(statearr_23841_23981[(1)] = (5));

} else {
var statearr_23842_23982 = state_23838__$1;
(statearr_23842_23982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (5))){
var state_23838__$1 = state_23838;
var statearr_23843_23983 = state_23838__$1;
(statearr_23843_23983[(2)] = null);

(statearr_23843_23983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (6))){
var state_23838__$1 = state_23838;
var statearr_23844_23984 = state_23838__$1;
(statearr_23844_23984[(2)] = null);

(statearr_23844_23984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23839 === (7))){
var inst_23834 = (state_23838[(2)]);
var state_23838__$1 = state_23838;
var statearr_23845_23985 = state_23838__$1;
(statearr_23845_23985[(2)] = inst_23834);

(statearr_23845_23985[(1)] = (3));


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
});})(__23967,c__23405__auto___23979,G__23798_23968,n__20217__auto___23966,jobs,results,process,async))
;
return ((function (__23967,switch__23293__auto__,c__23405__auto___23979,G__23798_23968,n__20217__auto___23966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0 = (function (){
var statearr_23849 = [null,null,null,null,null,null,null];
(statearr_23849[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__);

(statearr_23849[(1)] = (1));

return statearr_23849;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1 = (function (state_23838){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_23838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e23850){if((e23850 instanceof Object)){
var ex__23297__auto__ = e23850;
var statearr_23851_23986 = state_23838;
(statearr_23851_23986[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23987 = state_23838;
state_23838 = G__23987;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = function(state_23838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1.call(this,state_23838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__;
})()
;})(__23967,switch__23293__auto__,c__23405__auto___23979,G__23798_23968,n__20217__auto___23966,jobs,results,process,async))
})();
var state__23407__auto__ = (function (){var statearr_23852 = f__23406__auto__.call(null);
(statearr_23852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___23979);

return statearr_23852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(__23967,c__23405__auto___23979,G__23798_23968,n__20217__auto___23966,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__23988 = (__23967 + (1));
__23967 = G__23988;
continue;
} else {
}
break;
}

var c__23405__auto___23989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___23989,jobs,results,process,async){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___23989,jobs,results,process,async){
return (function (state_23874){
var state_val_23875 = (state_23874[(1)]);
if((state_val_23875 === (1))){
var state_23874__$1 = state_23874;
var statearr_23876_23990 = state_23874__$1;
(statearr_23876_23990[(2)] = null);

(statearr_23876_23990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (2))){
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23874__$1,(4),from);
} else {
if((state_val_23875 === (3))){
var inst_23872 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23874__$1,inst_23872);
} else {
if((state_val_23875 === (4))){
var inst_23855 = (state_23874[(7)]);
var inst_23855__$1 = (state_23874[(2)]);
var inst_23856 = (inst_23855__$1 == null);
var state_23874__$1 = (function (){var statearr_23877 = state_23874;
(statearr_23877[(7)] = inst_23855__$1);

return statearr_23877;
})();
if(cljs.core.truth_(inst_23856)){
var statearr_23878_23991 = state_23874__$1;
(statearr_23878_23991[(1)] = (5));

} else {
var statearr_23879_23992 = state_23874__$1;
(statearr_23879_23992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (5))){
var inst_23858 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23874__$1 = state_23874;
var statearr_23880_23993 = state_23874__$1;
(statearr_23880_23993[(2)] = inst_23858);

(statearr_23880_23993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (6))){
var inst_23860 = (state_23874[(8)]);
var inst_23855 = (state_23874[(7)]);
var inst_23860__$1 = cljs.core.async.chan.call(null,(1));
var inst_23861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23862 = [inst_23855,inst_23860__$1];
var inst_23863 = (new cljs.core.PersistentVector(null,2,(5),inst_23861,inst_23862,null));
var state_23874__$1 = (function (){var statearr_23881 = state_23874;
(statearr_23881[(8)] = inst_23860__$1);

return statearr_23881;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23874__$1,(8),jobs,inst_23863);
} else {
if((state_val_23875 === (7))){
var inst_23870 = (state_23874[(2)]);
var state_23874__$1 = state_23874;
var statearr_23882_23994 = state_23874__$1;
(statearr_23882_23994[(2)] = inst_23870);

(statearr_23882_23994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23875 === (8))){
var inst_23860 = (state_23874[(8)]);
var inst_23865 = (state_23874[(2)]);
var state_23874__$1 = (function (){var statearr_23883 = state_23874;
(statearr_23883[(9)] = inst_23865);

return statearr_23883;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23874__$1,(9),results,inst_23860);
} else {
if((state_val_23875 === (9))){
var inst_23867 = (state_23874[(2)]);
var state_23874__$1 = (function (){var statearr_23884 = state_23874;
(statearr_23884[(10)] = inst_23867);

return statearr_23884;
})();
var statearr_23885_23995 = state_23874__$1;
(statearr_23885_23995[(2)] = null);

(statearr_23885_23995[(1)] = (2));


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
});})(c__23405__auto___23989,jobs,results,process,async))
;
return ((function (switch__23293__auto__,c__23405__auto___23989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0 = (function (){
var statearr_23889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__);

(statearr_23889[(1)] = (1));

return statearr_23889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1 = (function (state_23874){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_23874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e23890){if((e23890 instanceof Object)){
var ex__23297__auto__ = e23890;
var statearr_23891_23996 = state_23874;
(statearr_23891_23996[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23997 = state_23874;
state_23874 = G__23997;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = function(state_23874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1.call(this,state_23874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___23989,jobs,results,process,async))
})();
var state__23407__auto__ = (function (){var statearr_23892 = f__23406__auto__.call(null);
(statearr_23892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___23989);

return statearr_23892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___23989,jobs,results,process,async))
);


var c__23405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto__,jobs,results,process,async){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto__,jobs,results,process,async){
return (function (state_23930){
var state_val_23931 = (state_23930[(1)]);
if((state_val_23931 === (7))){
var inst_23926 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23932_23998 = state_23930__$1;
(statearr_23932_23998[(2)] = inst_23926);

(statearr_23932_23998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (20))){
var state_23930__$1 = state_23930;
var statearr_23933_23999 = state_23930__$1;
(statearr_23933_23999[(2)] = null);

(statearr_23933_23999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (1))){
var state_23930__$1 = state_23930;
var statearr_23934_24000 = state_23930__$1;
(statearr_23934_24000[(2)] = null);

(statearr_23934_24000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (4))){
var inst_23895 = (state_23930[(7)]);
var inst_23895__$1 = (state_23930[(2)]);
var inst_23896 = (inst_23895__$1 == null);
var state_23930__$1 = (function (){var statearr_23935 = state_23930;
(statearr_23935[(7)] = inst_23895__$1);

return statearr_23935;
})();
if(cljs.core.truth_(inst_23896)){
var statearr_23936_24001 = state_23930__$1;
(statearr_23936_24001[(1)] = (5));

} else {
var statearr_23937_24002 = state_23930__$1;
(statearr_23937_24002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (15))){
var inst_23908 = (state_23930[(8)]);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23930__$1,(18),to,inst_23908);
} else {
if((state_val_23931 === (21))){
var inst_23921 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23938_24003 = state_23930__$1;
(statearr_23938_24003[(2)] = inst_23921);

(statearr_23938_24003[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (13))){
var inst_23923 = (state_23930[(2)]);
var state_23930__$1 = (function (){var statearr_23939 = state_23930;
(statearr_23939[(9)] = inst_23923);

return statearr_23939;
})();
var statearr_23940_24004 = state_23930__$1;
(statearr_23940_24004[(2)] = null);

(statearr_23940_24004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (6))){
var inst_23895 = (state_23930[(7)]);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(11),inst_23895);
} else {
if((state_val_23931 === (17))){
var inst_23916 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
if(cljs.core.truth_(inst_23916)){
var statearr_23941_24005 = state_23930__$1;
(statearr_23941_24005[(1)] = (19));

} else {
var statearr_23942_24006 = state_23930__$1;
(statearr_23942_24006[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (3))){
var inst_23928 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23930__$1,inst_23928);
} else {
if((state_val_23931 === (12))){
var inst_23905 = (state_23930[(10)]);
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(14),inst_23905);
} else {
if((state_val_23931 === (2))){
var state_23930__$1 = state_23930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23930__$1,(4),results);
} else {
if((state_val_23931 === (19))){
var state_23930__$1 = state_23930;
var statearr_23943_24007 = state_23930__$1;
(statearr_23943_24007[(2)] = null);

(statearr_23943_24007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (11))){
var inst_23905 = (state_23930[(2)]);
var state_23930__$1 = (function (){var statearr_23944 = state_23930;
(statearr_23944[(10)] = inst_23905);

return statearr_23944;
})();
var statearr_23945_24008 = state_23930__$1;
(statearr_23945_24008[(2)] = null);

(statearr_23945_24008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (9))){
var state_23930__$1 = state_23930;
var statearr_23946_24009 = state_23930__$1;
(statearr_23946_24009[(2)] = null);

(statearr_23946_24009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (5))){
var state_23930__$1 = state_23930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23947_24010 = state_23930__$1;
(statearr_23947_24010[(1)] = (8));

} else {
var statearr_23948_24011 = state_23930__$1;
(statearr_23948_24011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (14))){
var inst_23910 = (state_23930[(11)]);
var inst_23908 = (state_23930[(8)]);
var inst_23908__$1 = (state_23930[(2)]);
var inst_23909 = (inst_23908__$1 == null);
var inst_23910__$1 = cljs.core.not.call(null,inst_23909);
var state_23930__$1 = (function (){var statearr_23949 = state_23930;
(statearr_23949[(11)] = inst_23910__$1);

(statearr_23949[(8)] = inst_23908__$1);

return statearr_23949;
})();
if(inst_23910__$1){
var statearr_23950_24012 = state_23930__$1;
(statearr_23950_24012[(1)] = (15));

} else {
var statearr_23951_24013 = state_23930__$1;
(statearr_23951_24013[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (16))){
var inst_23910 = (state_23930[(11)]);
var state_23930__$1 = state_23930;
var statearr_23952_24014 = state_23930__$1;
(statearr_23952_24014[(2)] = inst_23910);

(statearr_23952_24014[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (10))){
var inst_23902 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23953_24015 = state_23930__$1;
(statearr_23953_24015[(2)] = inst_23902);

(statearr_23953_24015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (18))){
var inst_23913 = (state_23930[(2)]);
var state_23930__$1 = state_23930;
var statearr_23954_24016 = state_23930__$1;
(statearr_23954_24016[(2)] = inst_23913);

(statearr_23954_24016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23931 === (8))){
var inst_23899 = cljs.core.async.close_BANG_.call(null,to);
var state_23930__$1 = state_23930;
var statearr_23955_24017 = state_23930__$1;
(statearr_23955_24017[(2)] = inst_23899);

(statearr_23955_24017[(1)] = (10));


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
});})(c__23405__auto__,jobs,results,process,async))
;
return ((function (switch__23293__auto__,c__23405__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0 = (function (){
var statearr_23959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__);

(statearr_23959[(1)] = (1));

return statearr_23959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1 = (function (state_23930){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_23930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e23960){if((e23960 instanceof Object)){
var ex__23297__auto__ = e23960;
var statearr_23961_24018 = state_23930;
(statearr_23961_24018[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24019 = state_23930;
state_23930 = G__24019;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__ = function(state_23930){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1.call(this,state_23930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23294__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto__,jobs,results,process,async))
})();
var state__23407__auto__ = (function (){var statearr_23962 = f__23406__auto__.call(null);
(statearr_23962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto__);

return statearr_23962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto__,jobs,results,process,async))
);

return c__23405__auto__;
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
var args24020 = [];
var len__20407__auto___24023 = arguments.length;
var i__20408__auto___24024 = (0);
while(true){
if((i__20408__auto___24024 < len__20407__auto___24023)){
args24020.push((arguments[i__20408__auto___24024]));

var G__24025 = (i__20408__auto___24024 + (1));
i__20408__auto___24024 = G__24025;
continue;
} else {
}
break;
}

var G__24022 = args24020.length;
switch (G__24022) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24020.length)].join('')));

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
var args24027 = [];
var len__20407__auto___24030 = arguments.length;
var i__20408__auto___24031 = (0);
while(true){
if((i__20408__auto___24031 < len__20407__auto___24030)){
args24027.push((arguments[i__20408__auto___24031]));

var G__24032 = (i__20408__auto___24031 + (1));
i__20408__auto___24031 = G__24032;
continue;
} else {
}
break;
}

var G__24029 = args24027.length;
switch (G__24029) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24027.length)].join('')));

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
var args24034 = [];
var len__20407__auto___24087 = arguments.length;
var i__20408__auto___24088 = (0);
while(true){
if((i__20408__auto___24088 < len__20407__auto___24087)){
args24034.push((arguments[i__20408__auto___24088]));

var G__24089 = (i__20408__auto___24088 + (1));
i__20408__auto___24088 = G__24089;
continue;
} else {
}
break;
}

var G__24036 = args24034.length;
switch (G__24036) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24034.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23405__auto___24091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___24091,tc,fc){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___24091,tc,fc){
return (function (state_24062){
var state_val_24063 = (state_24062[(1)]);
if((state_val_24063 === (7))){
var inst_24058 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
var statearr_24064_24092 = state_24062__$1;
(statearr_24064_24092[(2)] = inst_24058);

(statearr_24064_24092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (1))){
var state_24062__$1 = state_24062;
var statearr_24065_24093 = state_24062__$1;
(statearr_24065_24093[(2)] = null);

(statearr_24065_24093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (4))){
var inst_24039 = (state_24062[(7)]);
var inst_24039__$1 = (state_24062[(2)]);
var inst_24040 = (inst_24039__$1 == null);
var state_24062__$1 = (function (){var statearr_24066 = state_24062;
(statearr_24066[(7)] = inst_24039__$1);

return statearr_24066;
})();
if(cljs.core.truth_(inst_24040)){
var statearr_24067_24094 = state_24062__$1;
(statearr_24067_24094[(1)] = (5));

} else {
var statearr_24068_24095 = state_24062__$1;
(statearr_24068_24095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (13))){
var state_24062__$1 = state_24062;
var statearr_24069_24096 = state_24062__$1;
(statearr_24069_24096[(2)] = null);

(statearr_24069_24096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (6))){
var inst_24039 = (state_24062[(7)]);
var inst_24045 = p.call(null,inst_24039);
var state_24062__$1 = state_24062;
if(cljs.core.truth_(inst_24045)){
var statearr_24070_24097 = state_24062__$1;
(statearr_24070_24097[(1)] = (9));

} else {
var statearr_24071_24098 = state_24062__$1;
(statearr_24071_24098[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (3))){
var inst_24060 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24062__$1,inst_24060);
} else {
if((state_val_24063 === (12))){
var state_24062__$1 = state_24062;
var statearr_24072_24099 = state_24062__$1;
(statearr_24072_24099[(2)] = null);

(statearr_24072_24099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (2))){
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24062__$1,(4),ch);
} else {
if((state_val_24063 === (11))){
var inst_24039 = (state_24062[(7)]);
var inst_24049 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24062__$1,(8),inst_24049,inst_24039);
} else {
if((state_val_24063 === (9))){
var state_24062__$1 = state_24062;
var statearr_24073_24100 = state_24062__$1;
(statearr_24073_24100[(2)] = tc);

(statearr_24073_24100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (5))){
var inst_24042 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24043 = cljs.core.async.close_BANG_.call(null,fc);
var state_24062__$1 = (function (){var statearr_24074 = state_24062;
(statearr_24074[(8)] = inst_24042);

return statearr_24074;
})();
var statearr_24075_24101 = state_24062__$1;
(statearr_24075_24101[(2)] = inst_24043);

(statearr_24075_24101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (14))){
var inst_24056 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
var statearr_24076_24102 = state_24062__$1;
(statearr_24076_24102[(2)] = inst_24056);

(statearr_24076_24102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (10))){
var state_24062__$1 = state_24062;
var statearr_24077_24103 = state_24062__$1;
(statearr_24077_24103[(2)] = fc);

(statearr_24077_24103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24063 === (8))){
var inst_24051 = (state_24062[(2)]);
var state_24062__$1 = state_24062;
if(cljs.core.truth_(inst_24051)){
var statearr_24078_24104 = state_24062__$1;
(statearr_24078_24104[(1)] = (12));

} else {
var statearr_24079_24105 = state_24062__$1;
(statearr_24079_24105[(1)] = (13));

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
});})(c__23405__auto___24091,tc,fc))
;
return ((function (switch__23293__auto__,c__23405__auto___24091,tc,fc){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_24083 = [null,null,null,null,null,null,null,null,null];
(statearr_24083[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_24083[(1)] = (1));

return statearr_24083;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_24062){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_24062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e24084){if((e24084 instanceof Object)){
var ex__23297__auto__ = e24084;
var statearr_24085_24106 = state_24062;
(statearr_24085_24106[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24107 = state_24062;
state_24062 = G__24107;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_24062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_24062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___24091,tc,fc))
})();
var state__23407__auto__ = (function (){var statearr_24086 = f__23406__auto__.call(null);
(statearr_24086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___24091);

return statearr_24086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___24091,tc,fc))
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
var c__23405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto__){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto__){
return (function (state_24171){
var state_val_24172 = (state_24171[(1)]);
if((state_val_24172 === (7))){
var inst_24167 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
var statearr_24173_24194 = state_24171__$1;
(statearr_24173_24194[(2)] = inst_24167);

(statearr_24173_24194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (1))){
var inst_24151 = init;
var state_24171__$1 = (function (){var statearr_24174 = state_24171;
(statearr_24174[(7)] = inst_24151);

return statearr_24174;
})();
var statearr_24175_24195 = state_24171__$1;
(statearr_24175_24195[(2)] = null);

(statearr_24175_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (4))){
var inst_24154 = (state_24171[(8)]);
var inst_24154__$1 = (state_24171[(2)]);
var inst_24155 = (inst_24154__$1 == null);
var state_24171__$1 = (function (){var statearr_24176 = state_24171;
(statearr_24176[(8)] = inst_24154__$1);

return statearr_24176;
})();
if(cljs.core.truth_(inst_24155)){
var statearr_24177_24196 = state_24171__$1;
(statearr_24177_24196[(1)] = (5));

} else {
var statearr_24178_24197 = state_24171__$1;
(statearr_24178_24197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (6))){
var inst_24154 = (state_24171[(8)]);
var inst_24158 = (state_24171[(9)]);
var inst_24151 = (state_24171[(7)]);
var inst_24158__$1 = f.call(null,inst_24151,inst_24154);
var inst_24159 = cljs.core.reduced_QMARK_.call(null,inst_24158__$1);
var state_24171__$1 = (function (){var statearr_24179 = state_24171;
(statearr_24179[(9)] = inst_24158__$1);

return statearr_24179;
})();
if(inst_24159){
var statearr_24180_24198 = state_24171__$1;
(statearr_24180_24198[(1)] = (8));

} else {
var statearr_24181_24199 = state_24171__$1;
(statearr_24181_24199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (3))){
var inst_24169 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24171__$1,inst_24169);
} else {
if((state_val_24172 === (2))){
var state_24171__$1 = state_24171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24171__$1,(4),ch);
} else {
if((state_val_24172 === (9))){
var inst_24158 = (state_24171[(9)]);
var inst_24151 = inst_24158;
var state_24171__$1 = (function (){var statearr_24182 = state_24171;
(statearr_24182[(7)] = inst_24151);

return statearr_24182;
})();
var statearr_24183_24200 = state_24171__$1;
(statearr_24183_24200[(2)] = null);

(statearr_24183_24200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (5))){
var inst_24151 = (state_24171[(7)]);
var state_24171__$1 = state_24171;
var statearr_24184_24201 = state_24171__$1;
(statearr_24184_24201[(2)] = inst_24151);

(statearr_24184_24201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (10))){
var inst_24165 = (state_24171[(2)]);
var state_24171__$1 = state_24171;
var statearr_24185_24202 = state_24171__$1;
(statearr_24185_24202[(2)] = inst_24165);

(statearr_24185_24202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24172 === (8))){
var inst_24158 = (state_24171[(9)]);
var inst_24161 = cljs.core.deref.call(null,inst_24158);
var state_24171__$1 = state_24171;
var statearr_24186_24203 = state_24171__$1;
(statearr_24186_24203[(2)] = inst_24161);

(statearr_24186_24203[(1)] = (10));


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
});})(c__23405__auto__))
;
return ((function (switch__23293__auto__,c__23405__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23294__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23294__auto____0 = (function (){
var statearr_24190 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24190[(0)] = cljs$core$async$reduce_$_state_machine__23294__auto__);

(statearr_24190[(1)] = (1));

return statearr_24190;
});
var cljs$core$async$reduce_$_state_machine__23294__auto____1 = (function (state_24171){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_24171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e24191){if((e24191 instanceof Object)){
var ex__23297__auto__ = e24191;
var statearr_24192_24204 = state_24171;
(statearr_24192_24204[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24205 = state_24171;
state_24171 = G__24205;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23294__auto__ = function(state_24171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23294__auto____1.call(this,state_24171);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23294__auto____0;
cljs$core$async$reduce_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23294__auto____1;
return cljs$core$async$reduce_$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto__))
})();
var state__23407__auto__ = (function (){var statearr_24193 = f__23406__auto__.call(null);
(statearr_24193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto__);

return statearr_24193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto__))
);

return c__23405__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto__,f__$1){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto__,f__$1){
return (function (state_24225){
var state_val_24226 = (state_24225[(1)]);
if((state_val_24226 === (1))){
var inst_24220 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24225__$1 = state_24225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24225__$1,(2),inst_24220);
} else {
if((state_val_24226 === (2))){
var inst_24222 = (state_24225[(2)]);
var inst_24223 = f__$1.call(null,inst_24222);
var state_24225__$1 = state_24225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24225__$1,inst_24223);
} else {
return null;
}
}
});})(c__23405__auto__,f__$1))
;
return ((function (switch__23293__auto__,c__23405__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23294__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23294__auto____0 = (function (){
var statearr_24230 = [null,null,null,null,null,null,null];
(statearr_24230[(0)] = cljs$core$async$transduce_$_state_machine__23294__auto__);

(statearr_24230[(1)] = (1));

return statearr_24230;
});
var cljs$core$async$transduce_$_state_machine__23294__auto____1 = (function (state_24225){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_24225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e24231){if((e24231 instanceof Object)){
var ex__23297__auto__ = e24231;
var statearr_24232_24234 = state_24225;
(statearr_24232_24234[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24235 = state_24225;
state_24225 = G__24235;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23294__auto__ = function(state_24225){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23294__auto____1.call(this,state_24225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23294__auto____0;
cljs$core$async$transduce_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23294__auto____1;
return cljs$core$async$transduce_$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto__,f__$1))
})();
var state__23407__auto__ = (function (){var statearr_24233 = f__23406__auto__.call(null);
(statearr_24233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto__);

return statearr_24233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto__,f__$1))
);

return c__23405__auto__;
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
var args24236 = [];
var len__20407__auto___24288 = arguments.length;
var i__20408__auto___24289 = (0);
while(true){
if((i__20408__auto___24289 < len__20407__auto___24288)){
args24236.push((arguments[i__20408__auto___24289]));

var G__24290 = (i__20408__auto___24289 + (1));
i__20408__auto___24289 = G__24290;
continue;
} else {
}
break;
}

var G__24238 = args24236.length;
switch (G__24238) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24236.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto__){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto__){
return (function (state_24263){
var state_val_24264 = (state_24263[(1)]);
if((state_val_24264 === (7))){
var inst_24245 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24265_24292 = state_24263__$1;
(statearr_24265_24292[(2)] = inst_24245);

(statearr_24265_24292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (1))){
var inst_24239 = cljs.core.seq.call(null,coll);
var inst_24240 = inst_24239;
var state_24263__$1 = (function (){var statearr_24266 = state_24263;
(statearr_24266[(7)] = inst_24240);

return statearr_24266;
})();
var statearr_24267_24293 = state_24263__$1;
(statearr_24267_24293[(2)] = null);

(statearr_24267_24293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (4))){
var inst_24240 = (state_24263[(7)]);
var inst_24243 = cljs.core.first.call(null,inst_24240);
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24263__$1,(7),ch,inst_24243);
} else {
if((state_val_24264 === (13))){
var inst_24257 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24268_24294 = state_24263__$1;
(statearr_24268_24294[(2)] = inst_24257);

(statearr_24268_24294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (6))){
var inst_24248 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
if(cljs.core.truth_(inst_24248)){
var statearr_24269_24295 = state_24263__$1;
(statearr_24269_24295[(1)] = (8));

} else {
var statearr_24270_24296 = state_24263__$1;
(statearr_24270_24296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (3))){
var inst_24261 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24263__$1,inst_24261);
} else {
if((state_val_24264 === (12))){
var state_24263__$1 = state_24263;
var statearr_24271_24297 = state_24263__$1;
(statearr_24271_24297[(2)] = null);

(statearr_24271_24297[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (2))){
var inst_24240 = (state_24263[(7)]);
var state_24263__$1 = state_24263;
if(cljs.core.truth_(inst_24240)){
var statearr_24272_24298 = state_24263__$1;
(statearr_24272_24298[(1)] = (4));

} else {
var statearr_24273_24299 = state_24263__$1;
(statearr_24273_24299[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (11))){
var inst_24254 = cljs.core.async.close_BANG_.call(null,ch);
var state_24263__$1 = state_24263;
var statearr_24274_24300 = state_24263__$1;
(statearr_24274_24300[(2)] = inst_24254);

(statearr_24274_24300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (9))){
var state_24263__$1 = state_24263;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24275_24301 = state_24263__$1;
(statearr_24275_24301[(1)] = (11));

} else {
var statearr_24276_24302 = state_24263__$1;
(statearr_24276_24302[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (5))){
var inst_24240 = (state_24263[(7)]);
var state_24263__$1 = state_24263;
var statearr_24277_24303 = state_24263__$1;
(statearr_24277_24303[(2)] = inst_24240);

(statearr_24277_24303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (10))){
var inst_24259 = (state_24263[(2)]);
var state_24263__$1 = state_24263;
var statearr_24278_24304 = state_24263__$1;
(statearr_24278_24304[(2)] = inst_24259);

(statearr_24278_24304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24264 === (8))){
var inst_24240 = (state_24263[(7)]);
var inst_24250 = cljs.core.next.call(null,inst_24240);
var inst_24240__$1 = inst_24250;
var state_24263__$1 = (function (){var statearr_24279 = state_24263;
(statearr_24279[(7)] = inst_24240__$1);

return statearr_24279;
})();
var statearr_24280_24305 = state_24263__$1;
(statearr_24280_24305[(2)] = null);

(statearr_24280_24305[(1)] = (2));


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
});})(c__23405__auto__))
;
return ((function (switch__23293__auto__,c__23405__auto__){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_24284 = [null,null,null,null,null,null,null,null];
(statearr_24284[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_24284[(1)] = (1));

return statearr_24284;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_24263){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_24263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e24285){if((e24285 instanceof Object)){
var ex__23297__auto__ = e24285;
var statearr_24286_24306 = state_24263;
(statearr_24286_24306[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24307 = state_24263;
state_24263 = G__24307;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_24263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_24263);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto__))
})();
var state__23407__auto__ = (function (){var statearr_24287 = f__23406__auto__.call(null);
(statearr_24287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto__);

return statearr_24287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto__))
);

return c__23405__auto__;
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
var x__19962__auto__ = (((_ == null))?null:_);
var m__19963__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,_);
} else {
var m__19963__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,_);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19963__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m,ch);
} else {
var m__19963__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m,ch);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m);
} else {
var m__19963__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24533 = (function (ch,cs,meta24534){
this.ch = ch;
this.cs = cs;
this.meta24534 = meta24534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24535,meta24534__$1){
var self__ = this;
var _24535__$1 = this;
return (new cljs.core.async.t_cljs$core$async24533(self__.ch,self__.cs,meta24534__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24535){
var self__ = this;
var _24535__$1 = this;
return self__.meta24534;
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24534","meta24534",2140760504,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24533";

cljs.core.async.t_cljs$core$async24533.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async24533");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24533 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24533(ch__$1,cs__$1,meta24534){
return (new cljs.core.async.t_cljs$core$async24533(ch__$1,cs__$1,meta24534));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24533(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23405__auto___24758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___24758,cs,m,dchan,dctr,done){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___24758,cs,m,dchan,dctr,done){
return (function (state_24670){
var state_val_24671 = (state_24670[(1)]);
if((state_val_24671 === (7))){
var inst_24666 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24672_24759 = state_24670__$1;
(statearr_24672_24759[(2)] = inst_24666);

(statearr_24672_24759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (20))){
var inst_24569 = (state_24670[(7)]);
var inst_24581 = cljs.core.first.call(null,inst_24569);
var inst_24582 = cljs.core.nth.call(null,inst_24581,(0),null);
var inst_24583 = cljs.core.nth.call(null,inst_24581,(1),null);
var state_24670__$1 = (function (){var statearr_24673 = state_24670;
(statearr_24673[(8)] = inst_24582);

return statearr_24673;
})();
if(cljs.core.truth_(inst_24583)){
var statearr_24674_24760 = state_24670__$1;
(statearr_24674_24760[(1)] = (22));

} else {
var statearr_24675_24761 = state_24670__$1;
(statearr_24675_24761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (27))){
var inst_24613 = (state_24670[(9)]);
var inst_24538 = (state_24670[(10)]);
var inst_24618 = (state_24670[(11)]);
var inst_24611 = (state_24670[(12)]);
var inst_24618__$1 = cljs.core._nth.call(null,inst_24611,inst_24613);
var inst_24619 = cljs.core.async.put_BANG_.call(null,inst_24618__$1,inst_24538,done);
var state_24670__$1 = (function (){var statearr_24676 = state_24670;
(statearr_24676[(11)] = inst_24618__$1);

return statearr_24676;
})();
if(cljs.core.truth_(inst_24619)){
var statearr_24677_24762 = state_24670__$1;
(statearr_24677_24762[(1)] = (30));

} else {
var statearr_24678_24763 = state_24670__$1;
(statearr_24678_24763[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (1))){
var state_24670__$1 = state_24670;
var statearr_24679_24764 = state_24670__$1;
(statearr_24679_24764[(2)] = null);

(statearr_24679_24764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (24))){
var inst_24569 = (state_24670[(7)]);
var inst_24588 = (state_24670[(2)]);
var inst_24589 = cljs.core.next.call(null,inst_24569);
var inst_24547 = inst_24589;
var inst_24548 = null;
var inst_24549 = (0);
var inst_24550 = (0);
var state_24670__$1 = (function (){var statearr_24680 = state_24670;
(statearr_24680[(13)] = inst_24549);

(statearr_24680[(14)] = inst_24547);

(statearr_24680[(15)] = inst_24588);

(statearr_24680[(16)] = inst_24550);

(statearr_24680[(17)] = inst_24548);

return statearr_24680;
})();
var statearr_24681_24765 = state_24670__$1;
(statearr_24681_24765[(2)] = null);

(statearr_24681_24765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (39))){
var state_24670__$1 = state_24670;
var statearr_24685_24766 = state_24670__$1;
(statearr_24685_24766[(2)] = null);

(statearr_24685_24766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (4))){
var inst_24538 = (state_24670[(10)]);
var inst_24538__$1 = (state_24670[(2)]);
var inst_24539 = (inst_24538__$1 == null);
var state_24670__$1 = (function (){var statearr_24686 = state_24670;
(statearr_24686[(10)] = inst_24538__$1);

return statearr_24686;
})();
if(cljs.core.truth_(inst_24539)){
var statearr_24687_24767 = state_24670__$1;
(statearr_24687_24767[(1)] = (5));

} else {
var statearr_24688_24768 = state_24670__$1;
(statearr_24688_24768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (15))){
var inst_24549 = (state_24670[(13)]);
var inst_24547 = (state_24670[(14)]);
var inst_24550 = (state_24670[(16)]);
var inst_24548 = (state_24670[(17)]);
var inst_24565 = (state_24670[(2)]);
var inst_24566 = (inst_24550 + (1));
var tmp24682 = inst_24549;
var tmp24683 = inst_24547;
var tmp24684 = inst_24548;
var inst_24547__$1 = tmp24683;
var inst_24548__$1 = tmp24684;
var inst_24549__$1 = tmp24682;
var inst_24550__$1 = inst_24566;
var state_24670__$1 = (function (){var statearr_24689 = state_24670;
(statearr_24689[(13)] = inst_24549__$1);

(statearr_24689[(14)] = inst_24547__$1);

(statearr_24689[(18)] = inst_24565);

(statearr_24689[(16)] = inst_24550__$1);

(statearr_24689[(17)] = inst_24548__$1);

return statearr_24689;
})();
var statearr_24690_24769 = state_24670__$1;
(statearr_24690_24769[(2)] = null);

(statearr_24690_24769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (21))){
var inst_24592 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24694_24770 = state_24670__$1;
(statearr_24694_24770[(2)] = inst_24592);

(statearr_24694_24770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (31))){
var inst_24618 = (state_24670[(11)]);
var inst_24622 = done.call(null,null);
var inst_24623 = cljs.core.async.untap_STAR_.call(null,m,inst_24618);
var state_24670__$1 = (function (){var statearr_24695 = state_24670;
(statearr_24695[(19)] = inst_24622);

return statearr_24695;
})();
var statearr_24696_24771 = state_24670__$1;
(statearr_24696_24771[(2)] = inst_24623);

(statearr_24696_24771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (32))){
var inst_24613 = (state_24670[(9)]);
var inst_24612 = (state_24670[(20)]);
var inst_24611 = (state_24670[(12)]);
var inst_24610 = (state_24670[(21)]);
var inst_24625 = (state_24670[(2)]);
var inst_24626 = (inst_24613 + (1));
var tmp24691 = inst_24612;
var tmp24692 = inst_24611;
var tmp24693 = inst_24610;
var inst_24610__$1 = tmp24693;
var inst_24611__$1 = tmp24692;
var inst_24612__$1 = tmp24691;
var inst_24613__$1 = inst_24626;
var state_24670__$1 = (function (){var statearr_24697 = state_24670;
(statearr_24697[(9)] = inst_24613__$1);

(statearr_24697[(20)] = inst_24612__$1);

(statearr_24697[(12)] = inst_24611__$1);

(statearr_24697[(22)] = inst_24625);

(statearr_24697[(21)] = inst_24610__$1);

return statearr_24697;
})();
var statearr_24698_24772 = state_24670__$1;
(statearr_24698_24772[(2)] = null);

(statearr_24698_24772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (40))){
var inst_24638 = (state_24670[(23)]);
var inst_24642 = done.call(null,null);
var inst_24643 = cljs.core.async.untap_STAR_.call(null,m,inst_24638);
var state_24670__$1 = (function (){var statearr_24699 = state_24670;
(statearr_24699[(24)] = inst_24642);

return statearr_24699;
})();
var statearr_24700_24773 = state_24670__$1;
(statearr_24700_24773[(2)] = inst_24643);

(statearr_24700_24773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (33))){
var inst_24629 = (state_24670[(25)]);
var inst_24631 = cljs.core.chunked_seq_QMARK_.call(null,inst_24629);
var state_24670__$1 = state_24670;
if(inst_24631){
var statearr_24701_24774 = state_24670__$1;
(statearr_24701_24774[(1)] = (36));

} else {
var statearr_24702_24775 = state_24670__$1;
(statearr_24702_24775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (13))){
var inst_24559 = (state_24670[(26)]);
var inst_24562 = cljs.core.async.close_BANG_.call(null,inst_24559);
var state_24670__$1 = state_24670;
var statearr_24703_24776 = state_24670__$1;
(statearr_24703_24776[(2)] = inst_24562);

(statearr_24703_24776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (22))){
var inst_24582 = (state_24670[(8)]);
var inst_24585 = cljs.core.async.close_BANG_.call(null,inst_24582);
var state_24670__$1 = state_24670;
var statearr_24704_24777 = state_24670__$1;
(statearr_24704_24777[(2)] = inst_24585);

(statearr_24704_24777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (36))){
var inst_24629 = (state_24670[(25)]);
var inst_24633 = cljs.core.chunk_first.call(null,inst_24629);
var inst_24634 = cljs.core.chunk_rest.call(null,inst_24629);
var inst_24635 = cljs.core.count.call(null,inst_24633);
var inst_24610 = inst_24634;
var inst_24611 = inst_24633;
var inst_24612 = inst_24635;
var inst_24613 = (0);
var state_24670__$1 = (function (){var statearr_24705 = state_24670;
(statearr_24705[(9)] = inst_24613);

(statearr_24705[(20)] = inst_24612);

(statearr_24705[(12)] = inst_24611);

(statearr_24705[(21)] = inst_24610);

return statearr_24705;
})();
var statearr_24706_24778 = state_24670__$1;
(statearr_24706_24778[(2)] = null);

(statearr_24706_24778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (41))){
var inst_24629 = (state_24670[(25)]);
var inst_24645 = (state_24670[(2)]);
var inst_24646 = cljs.core.next.call(null,inst_24629);
var inst_24610 = inst_24646;
var inst_24611 = null;
var inst_24612 = (0);
var inst_24613 = (0);
var state_24670__$1 = (function (){var statearr_24707 = state_24670;
(statearr_24707[(27)] = inst_24645);

(statearr_24707[(9)] = inst_24613);

(statearr_24707[(20)] = inst_24612);

(statearr_24707[(12)] = inst_24611);

(statearr_24707[(21)] = inst_24610);

return statearr_24707;
})();
var statearr_24708_24779 = state_24670__$1;
(statearr_24708_24779[(2)] = null);

(statearr_24708_24779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (43))){
var state_24670__$1 = state_24670;
var statearr_24709_24780 = state_24670__$1;
(statearr_24709_24780[(2)] = null);

(statearr_24709_24780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (29))){
var inst_24654 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24710_24781 = state_24670__$1;
(statearr_24710_24781[(2)] = inst_24654);

(statearr_24710_24781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (44))){
var inst_24663 = (state_24670[(2)]);
var state_24670__$1 = (function (){var statearr_24711 = state_24670;
(statearr_24711[(28)] = inst_24663);

return statearr_24711;
})();
var statearr_24712_24782 = state_24670__$1;
(statearr_24712_24782[(2)] = null);

(statearr_24712_24782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (6))){
var inst_24602 = (state_24670[(29)]);
var inst_24601 = cljs.core.deref.call(null,cs);
var inst_24602__$1 = cljs.core.keys.call(null,inst_24601);
var inst_24603 = cljs.core.count.call(null,inst_24602__$1);
var inst_24604 = cljs.core.reset_BANG_.call(null,dctr,inst_24603);
var inst_24609 = cljs.core.seq.call(null,inst_24602__$1);
var inst_24610 = inst_24609;
var inst_24611 = null;
var inst_24612 = (0);
var inst_24613 = (0);
var state_24670__$1 = (function (){var statearr_24713 = state_24670;
(statearr_24713[(9)] = inst_24613);

(statearr_24713[(20)] = inst_24612);

(statearr_24713[(12)] = inst_24611);

(statearr_24713[(29)] = inst_24602__$1);

(statearr_24713[(30)] = inst_24604);

(statearr_24713[(21)] = inst_24610);

return statearr_24713;
})();
var statearr_24714_24783 = state_24670__$1;
(statearr_24714_24783[(2)] = null);

(statearr_24714_24783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (28))){
var inst_24629 = (state_24670[(25)]);
var inst_24610 = (state_24670[(21)]);
var inst_24629__$1 = cljs.core.seq.call(null,inst_24610);
var state_24670__$1 = (function (){var statearr_24715 = state_24670;
(statearr_24715[(25)] = inst_24629__$1);

return statearr_24715;
})();
if(inst_24629__$1){
var statearr_24716_24784 = state_24670__$1;
(statearr_24716_24784[(1)] = (33));

} else {
var statearr_24717_24785 = state_24670__$1;
(statearr_24717_24785[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (25))){
var inst_24613 = (state_24670[(9)]);
var inst_24612 = (state_24670[(20)]);
var inst_24615 = (inst_24613 < inst_24612);
var inst_24616 = inst_24615;
var state_24670__$1 = state_24670;
if(cljs.core.truth_(inst_24616)){
var statearr_24718_24786 = state_24670__$1;
(statearr_24718_24786[(1)] = (27));

} else {
var statearr_24719_24787 = state_24670__$1;
(statearr_24719_24787[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (34))){
var state_24670__$1 = state_24670;
var statearr_24720_24788 = state_24670__$1;
(statearr_24720_24788[(2)] = null);

(statearr_24720_24788[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (17))){
var state_24670__$1 = state_24670;
var statearr_24721_24789 = state_24670__$1;
(statearr_24721_24789[(2)] = null);

(statearr_24721_24789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (3))){
var inst_24668 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24670__$1,inst_24668);
} else {
if((state_val_24671 === (12))){
var inst_24597 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24722_24790 = state_24670__$1;
(statearr_24722_24790[(2)] = inst_24597);

(statearr_24722_24790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (2))){
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24670__$1,(4),ch);
} else {
if((state_val_24671 === (23))){
var state_24670__$1 = state_24670;
var statearr_24723_24791 = state_24670__$1;
(statearr_24723_24791[(2)] = null);

(statearr_24723_24791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (35))){
var inst_24652 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24724_24792 = state_24670__$1;
(statearr_24724_24792[(2)] = inst_24652);

(statearr_24724_24792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (19))){
var inst_24569 = (state_24670[(7)]);
var inst_24573 = cljs.core.chunk_first.call(null,inst_24569);
var inst_24574 = cljs.core.chunk_rest.call(null,inst_24569);
var inst_24575 = cljs.core.count.call(null,inst_24573);
var inst_24547 = inst_24574;
var inst_24548 = inst_24573;
var inst_24549 = inst_24575;
var inst_24550 = (0);
var state_24670__$1 = (function (){var statearr_24725 = state_24670;
(statearr_24725[(13)] = inst_24549);

(statearr_24725[(14)] = inst_24547);

(statearr_24725[(16)] = inst_24550);

(statearr_24725[(17)] = inst_24548);

return statearr_24725;
})();
var statearr_24726_24793 = state_24670__$1;
(statearr_24726_24793[(2)] = null);

(statearr_24726_24793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (11))){
var inst_24547 = (state_24670[(14)]);
var inst_24569 = (state_24670[(7)]);
var inst_24569__$1 = cljs.core.seq.call(null,inst_24547);
var state_24670__$1 = (function (){var statearr_24727 = state_24670;
(statearr_24727[(7)] = inst_24569__$1);

return statearr_24727;
})();
if(inst_24569__$1){
var statearr_24728_24794 = state_24670__$1;
(statearr_24728_24794[(1)] = (16));

} else {
var statearr_24729_24795 = state_24670__$1;
(statearr_24729_24795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (9))){
var inst_24599 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24730_24796 = state_24670__$1;
(statearr_24730_24796[(2)] = inst_24599);

(statearr_24730_24796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (5))){
var inst_24545 = cljs.core.deref.call(null,cs);
var inst_24546 = cljs.core.seq.call(null,inst_24545);
var inst_24547 = inst_24546;
var inst_24548 = null;
var inst_24549 = (0);
var inst_24550 = (0);
var state_24670__$1 = (function (){var statearr_24731 = state_24670;
(statearr_24731[(13)] = inst_24549);

(statearr_24731[(14)] = inst_24547);

(statearr_24731[(16)] = inst_24550);

(statearr_24731[(17)] = inst_24548);

return statearr_24731;
})();
var statearr_24732_24797 = state_24670__$1;
(statearr_24732_24797[(2)] = null);

(statearr_24732_24797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (14))){
var state_24670__$1 = state_24670;
var statearr_24733_24798 = state_24670__$1;
(statearr_24733_24798[(2)] = null);

(statearr_24733_24798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (45))){
var inst_24660 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24734_24799 = state_24670__$1;
(statearr_24734_24799[(2)] = inst_24660);

(statearr_24734_24799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (26))){
var inst_24602 = (state_24670[(29)]);
var inst_24656 = (state_24670[(2)]);
var inst_24657 = cljs.core.seq.call(null,inst_24602);
var state_24670__$1 = (function (){var statearr_24735 = state_24670;
(statearr_24735[(31)] = inst_24656);

return statearr_24735;
})();
if(inst_24657){
var statearr_24736_24800 = state_24670__$1;
(statearr_24736_24800[(1)] = (42));

} else {
var statearr_24737_24801 = state_24670__$1;
(statearr_24737_24801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (16))){
var inst_24569 = (state_24670[(7)]);
var inst_24571 = cljs.core.chunked_seq_QMARK_.call(null,inst_24569);
var state_24670__$1 = state_24670;
if(inst_24571){
var statearr_24738_24802 = state_24670__$1;
(statearr_24738_24802[(1)] = (19));

} else {
var statearr_24739_24803 = state_24670__$1;
(statearr_24739_24803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (38))){
var inst_24649 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24740_24804 = state_24670__$1;
(statearr_24740_24804[(2)] = inst_24649);

(statearr_24740_24804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (30))){
var state_24670__$1 = state_24670;
var statearr_24741_24805 = state_24670__$1;
(statearr_24741_24805[(2)] = null);

(statearr_24741_24805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (10))){
var inst_24550 = (state_24670[(16)]);
var inst_24548 = (state_24670[(17)]);
var inst_24558 = cljs.core._nth.call(null,inst_24548,inst_24550);
var inst_24559 = cljs.core.nth.call(null,inst_24558,(0),null);
var inst_24560 = cljs.core.nth.call(null,inst_24558,(1),null);
var state_24670__$1 = (function (){var statearr_24742 = state_24670;
(statearr_24742[(26)] = inst_24559);

return statearr_24742;
})();
if(cljs.core.truth_(inst_24560)){
var statearr_24743_24806 = state_24670__$1;
(statearr_24743_24806[(1)] = (13));

} else {
var statearr_24744_24807 = state_24670__$1;
(statearr_24744_24807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (18))){
var inst_24595 = (state_24670[(2)]);
var state_24670__$1 = state_24670;
var statearr_24745_24808 = state_24670__$1;
(statearr_24745_24808[(2)] = inst_24595);

(statearr_24745_24808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (42))){
var state_24670__$1 = state_24670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24670__$1,(45),dchan);
} else {
if((state_val_24671 === (37))){
var inst_24538 = (state_24670[(10)]);
var inst_24638 = (state_24670[(23)]);
var inst_24629 = (state_24670[(25)]);
var inst_24638__$1 = cljs.core.first.call(null,inst_24629);
var inst_24639 = cljs.core.async.put_BANG_.call(null,inst_24638__$1,inst_24538,done);
var state_24670__$1 = (function (){var statearr_24746 = state_24670;
(statearr_24746[(23)] = inst_24638__$1);

return statearr_24746;
})();
if(cljs.core.truth_(inst_24639)){
var statearr_24747_24809 = state_24670__$1;
(statearr_24747_24809[(1)] = (39));

} else {
var statearr_24748_24810 = state_24670__$1;
(statearr_24748_24810[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24671 === (8))){
var inst_24549 = (state_24670[(13)]);
var inst_24550 = (state_24670[(16)]);
var inst_24552 = (inst_24550 < inst_24549);
var inst_24553 = inst_24552;
var state_24670__$1 = state_24670;
if(cljs.core.truth_(inst_24553)){
var statearr_24749_24811 = state_24670__$1;
(statearr_24749_24811[(1)] = (10));

} else {
var statearr_24750_24812 = state_24670__$1;
(statearr_24750_24812[(1)] = (11));

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
});})(c__23405__auto___24758,cs,m,dchan,dctr,done))
;
return ((function (switch__23293__auto__,c__23405__auto___24758,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23294__auto__ = null;
var cljs$core$async$mult_$_state_machine__23294__auto____0 = (function (){
var statearr_24754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24754[(0)] = cljs$core$async$mult_$_state_machine__23294__auto__);

(statearr_24754[(1)] = (1));

return statearr_24754;
});
var cljs$core$async$mult_$_state_machine__23294__auto____1 = (function (state_24670){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_24670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e24755){if((e24755 instanceof Object)){
var ex__23297__auto__ = e24755;
var statearr_24756_24813 = state_24670;
(statearr_24756_24813[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24814 = state_24670;
state_24670 = G__24814;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23294__auto__ = function(state_24670){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23294__auto____1.call(this,state_24670);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23294__auto____0;
cljs$core$async$mult_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23294__auto____1;
return cljs$core$async$mult_$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___24758,cs,m,dchan,dctr,done))
})();
var state__23407__auto__ = (function (){var statearr_24757 = f__23406__auto__.call(null);
(statearr_24757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___24758);

return statearr_24757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___24758,cs,m,dchan,dctr,done))
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
var args24815 = [];
var len__20407__auto___24818 = arguments.length;
var i__20408__auto___24819 = (0);
while(true){
if((i__20408__auto___24819 < len__20407__auto___24818)){
args24815.push((arguments[i__20408__auto___24819]));

var G__24820 = (i__20408__auto___24819 + (1));
i__20408__auto___24819 = G__24820;
continue;
} else {
}
break;
}

var G__24817 = args24815.length;
switch (G__24817) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24815.length)].join('')));

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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m,ch);
} else {
var m__19963__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m,ch);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m,ch);
} else {
var m__19963__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m,ch);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m);
} else {
var m__19963__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m,state_map);
} else {
var m__19963__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m,state_map);
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
var x__19962__auto__ = (((m == null))?null:m);
var m__19963__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,m,mode);
} else {
var m__19963__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20414__auto__ = [];
var len__20407__auto___24832 = arguments.length;
var i__20408__auto___24833 = (0);
while(true){
if((i__20408__auto___24833 < len__20407__auto___24832)){
args__20414__auto__.push((arguments[i__20408__auto___24833]));

var G__24834 = (i__20408__auto___24833 + (1));
i__20408__auto___24833 = G__24834;
continue;
} else {
}
break;
}

var argseq__20415__auto__ = ((((3) < args__20414__auto__.length))?(new cljs.core.IndexedSeq(args__20414__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20415__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24826){
var map__24827 = p__24826;
var map__24827__$1 = ((((!((map__24827 == null)))?((((map__24827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24827):map__24827);
var opts = map__24827__$1;
var statearr_24829_24835 = state;
(statearr_24829_24835[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24827,map__24827__$1,opts){
return (function (val){
var statearr_24830_24836 = state;
(statearr_24830_24836[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24827,map__24827__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24831_24837 = state;
(statearr_24831_24837[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24822){
var G__24823 = cljs.core.first.call(null,seq24822);
var seq24822__$1 = cljs.core.next.call(null,seq24822);
var G__24824 = cljs.core.first.call(null,seq24822__$1);
var seq24822__$2 = cljs.core.next.call(null,seq24822__$1);
var G__24825 = cljs.core.first.call(null,seq24822__$2);
var seq24822__$3 = cljs.core.next.call(null,seq24822__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24823,G__24824,G__24825,seq24822__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25005 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta25006){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta25006 = meta25006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25007,meta25006__$1){
var self__ = this;
var _25007__$1 = this;
return (new cljs.core.async.t_cljs$core$async25005(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta25006__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25007){
var self__ = this;
var _25007__$1 = this;
return self__.meta25006;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta25006","meta25006",1256223593,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25005";

cljs.core.async.t_cljs$core$async25005.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async25005");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25005 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25005(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25006){
return (new cljs.core.async.t_cljs$core$async25005(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta25006));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25005(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23405__auto___25172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___25172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___25172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25109){
var state_val_25110 = (state_25109[(1)]);
if((state_val_25110 === (7))){
var inst_25024 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25111_25173 = state_25109__$1;
(statearr_25111_25173[(2)] = inst_25024);

(statearr_25111_25173[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (20))){
var inst_25036 = (state_25109[(7)]);
var state_25109__$1 = state_25109;
var statearr_25112_25174 = state_25109__$1;
(statearr_25112_25174[(2)] = inst_25036);

(statearr_25112_25174[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (27))){
var state_25109__$1 = state_25109;
var statearr_25113_25175 = state_25109__$1;
(statearr_25113_25175[(2)] = null);

(statearr_25113_25175[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (1))){
var inst_25011 = (state_25109[(8)]);
var inst_25011__$1 = calc_state.call(null);
var inst_25013 = (inst_25011__$1 == null);
var inst_25014 = cljs.core.not.call(null,inst_25013);
var state_25109__$1 = (function (){var statearr_25114 = state_25109;
(statearr_25114[(8)] = inst_25011__$1);

return statearr_25114;
})();
if(inst_25014){
var statearr_25115_25176 = state_25109__$1;
(statearr_25115_25176[(1)] = (2));

} else {
var statearr_25116_25177 = state_25109__$1;
(statearr_25116_25177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (24))){
var inst_25069 = (state_25109[(9)]);
var inst_25083 = (state_25109[(10)]);
var inst_25060 = (state_25109[(11)]);
var inst_25083__$1 = inst_25060.call(null,inst_25069);
var state_25109__$1 = (function (){var statearr_25117 = state_25109;
(statearr_25117[(10)] = inst_25083__$1);

return statearr_25117;
})();
if(cljs.core.truth_(inst_25083__$1)){
var statearr_25118_25178 = state_25109__$1;
(statearr_25118_25178[(1)] = (29));

} else {
var statearr_25119_25179 = state_25109__$1;
(statearr_25119_25179[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (4))){
var inst_25027 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25027)){
var statearr_25120_25180 = state_25109__$1;
(statearr_25120_25180[(1)] = (8));

} else {
var statearr_25121_25181 = state_25109__$1;
(statearr_25121_25181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (15))){
var inst_25054 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25054)){
var statearr_25122_25182 = state_25109__$1;
(statearr_25122_25182[(1)] = (19));

} else {
var statearr_25123_25183 = state_25109__$1;
(statearr_25123_25183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (21))){
var inst_25059 = (state_25109[(12)]);
var inst_25059__$1 = (state_25109[(2)]);
var inst_25060 = cljs.core.get.call(null,inst_25059__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25061 = cljs.core.get.call(null,inst_25059__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25062 = cljs.core.get.call(null,inst_25059__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25109__$1 = (function (){var statearr_25124 = state_25109;
(statearr_25124[(12)] = inst_25059__$1);

(statearr_25124[(11)] = inst_25060);

(statearr_25124[(13)] = inst_25061);

return statearr_25124;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25109__$1,(22),inst_25062);
} else {
if((state_val_25110 === (31))){
var inst_25091 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25091)){
var statearr_25125_25184 = state_25109__$1;
(statearr_25125_25184[(1)] = (32));

} else {
var statearr_25126_25185 = state_25109__$1;
(statearr_25126_25185[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (32))){
var inst_25068 = (state_25109[(14)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25109__$1,(35),out,inst_25068);
} else {
if((state_val_25110 === (33))){
var inst_25059 = (state_25109[(12)]);
var inst_25036 = inst_25059;
var state_25109__$1 = (function (){var statearr_25127 = state_25109;
(statearr_25127[(7)] = inst_25036);

return statearr_25127;
})();
var statearr_25128_25186 = state_25109__$1;
(statearr_25128_25186[(2)] = null);

(statearr_25128_25186[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (13))){
var inst_25036 = (state_25109[(7)]);
var inst_25043 = inst_25036.cljs$lang$protocol_mask$partition0$;
var inst_25044 = (inst_25043 & (64));
var inst_25045 = inst_25036.cljs$core$ISeq$;
var inst_25046 = (cljs.core.PROTOCOL_SENTINEL === inst_25045);
var inst_25047 = (inst_25044) || (inst_25046);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25047)){
var statearr_25129_25187 = state_25109__$1;
(statearr_25129_25187[(1)] = (16));

} else {
var statearr_25130_25188 = state_25109__$1;
(statearr_25130_25188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (22))){
var inst_25069 = (state_25109[(9)]);
var inst_25068 = (state_25109[(14)]);
var inst_25067 = (state_25109[(2)]);
var inst_25068__$1 = cljs.core.nth.call(null,inst_25067,(0),null);
var inst_25069__$1 = cljs.core.nth.call(null,inst_25067,(1),null);
var inst_25070 = (inst_25068__$1 == null);
var inst_25071 = cljs.core._EQ_.call(null,inst_25069__$1,change);
var inst_25072 = (inst_25070) || (inst_25071);
var state_25109__$1 = (function (){var statearr_25131 = state_25109;
(statearr_25131[(9)] = inst_25069__$1);

(statearr_25131[(14)] = inst_25068__$1);

return statearr_25131;
})();
if(cljs.core.truth_(inst_25072)){
var statearr_25132_25189 = state_25109__$1;
(statearr_25132_25189[(1)] = (23));

} else {
var statearr_25133_25190 = state_25109__$1;
(statearr_25133_25190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (36))){
var inst_25059 = (state_25109[(12)]);
var inst_25036 = inst_25059;
var state_25109__$1 = (function (){var statearr_25134 = state_25109;
(statearr_25134[(7)] = inst_25036);

return statearr_25134;
})();
var statearr_25135_25191 = state_25109__$1;
(statearr_25135_25191[(2)] = null);

(statearr_25135_25191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (29))){
var inst_25083 = (state_25109[(10)]);
var state_25109__$1 = state_25109;
var statearr_25136_25192 = state_25109__$1;
(statearr_25136_25192[(2)] = inst_25083);

(statearr_25136_25192[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (6))){
var state_25109__$1 = state_25109;
var statearr_25137_25193 = state_25109__$1;
(statearr_25137_25193[(2)] = false);

(statearr_25137_25193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (28))){
var inst_25079 = (state_25109[(2)]);
var inst_25080 = calc_state.call(null);
var inst_25036 = inst_25080;
var state_25109__$1 = (function (){var statearr_25138 = state_25109;
(statearr_25138[(15)] = inst_25079);

(statearr_25138[(7)] = inst_25036);

return statearr_25138;
})();
var statearr_25139_25194 = state_25109__$1;
(statearr_25139_25194[(2)] = null);

(statearr_25139_25194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (25))){
var inst_25105 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25140_25195 = state_25109__$1;
(statearr_25140_25195[(2)] = inst_25105);

(statearr_25140_25195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (34))){
var inst_25103 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25141_25196 = state_25109__$1;
(statearr_25141_25196[(2)] = inst_25103);

(statearr_25141_25196[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (17))){
var state_25109__$1 = state_25109;
var statearr_25142_25197 = state_25109__$1;
(statearr_25142_25197[(2)] = false);

(statearr_25142_25197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (3))){
var state_25109__$1 = state_25109;
var statearr_25143_25198 = state_25109__$1;
(statearr_25143_25198[(2)] = false);

(statearr_25143_25198[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (12))){
var inst_25107 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25109__$1,inst_25107);
} else {
if((state_val_25110 === (2))){
var inst_25011 = (state_25109[(8)]);
var inst_25016 = inst_25011.cljs$lang$protocol_mask$partition0$;
var inst_25017 = (inst_25016 & (64));
var inst_25018 = inst_25011.cljs$core$ISeq$;
var inst_25019 = (cljs.core.PROTOCOL_SENTINEL === inst_25018);
var inst_25020 = (inst_25017) || (inst_25019);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25020)){
var statearr_25144_25199 = state_25109__$1;
(statearr_25144_25199[(1)] = (5));

} else {
var statearr_25145_25200 = state_25109__$1;
(statearr_25145_25200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (23))){
var inst_25068 = (state_25109[(14)]);
var inst_25074 = (inst_25068 == null);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25074)){
var statearr_25146_25201 = state_25109__$1;
(statearr_25146_25201[(1)] = (26));

} else {
var statearr_25147_25202 = state_25109__$1;
(statearr_25147_25202[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (35))){
var inst_25094 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25094)){
var statearr_25148_25203 = state_25109__$1;
(statearr_25148_25203[(1)] = (36));

} else {
var statearr_25149_25204 = state_25109__$1;
(statearr_25149_25204[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (19))){
var inst_25036 = (state_25109[(7)]);
var inst_25056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25036);
var state_25109__$1 = state_25109;
var statearr_25150_25205 = state_25109__$1;
(statearr_25150_25205[(2)] = inst_25056);

(statearr_25150_25205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (11))){
var inst_25036 = (state_25109[(7)]);
var inst_25040 = (inst_25036 == null);
var inst_25041 = cljs.core.not.call(null,inst_25040);
var state_25109__$1 = state_25109;
if(inst_25041){
var statearr_25151_25206 = state_25109__$1;
(statearr_25151_25206[(1)] = (13));

} else {
var statearr_25152_25207 = state_25109__$1;
(statearr_25152_25207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (9))){
var inst_25011 = (state_25109[(8)]);
var state_25109__$1 = state_25109;
var statearr_25153_25208 = state_25109__$1;
(statearr_25153_25208[(2)] = inst_25011);

(statearr_25153_25208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (5))){
var state_25109__$1 = state_25109;
var statearr_25154_25209 = state_25109__$1;
(statearr_25154_25209[(2)] = true);

(statearr_25154_25209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (14))){
var state_25109__$1 = state_25109;
var statearr_25155_25210 = state_25109__$1;
(statearr_25155_25210[(2)] = false);

(statearr_25155_25210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (26))){
var inst_25069 = (state_25109[(9)]);
var inst_25076 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25069);
var state_25109__$1 = state_25109;
var statearr_25156_25211 = state_25109__$1;
(statearr_25156_25211[(2)] = inst_25076);

(statearr_25156_25211[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (16))){
var state_25109__$1 = state_25109;
var statearr_25157_25212 = state_25109__$1;
(statearr_25157_25212[(2)] = true);

(statearr_25157_25212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (38))){
var inst_25099 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25158_25213 = state_25109__$1;
(statearr_25158_25213[(2)] = inst_25099);

(statearr_25158_25213[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (30))){
var inst_25069 = (state_25109[(9)]);
var inst_25060 = (state_25109[(11)]);
var inst_25061 = (state_25109[(13)]);
var inst_25086 = cljs.core.empty_QMARK_.call(null,inst_25060);
var inst_25087 = inst_25061.call(null,inst_25069);
var inst_25088 = cljs.core.not.call(null,inst_25087);
var inst_25089 = (inst_25086) && (inst_25088);
var state_25109__$1 = state_25109;
var statearr_25159_25214 = state_25109__$1;
(statearr_25159_25214[(2)] = inst_25089);

(statearr_25159_25214[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (10))){
var inst_25011 = (state_25109[(8)]);
var inst_25032 = (state_25109[(2)]);
var inst_25033 = cljs.core.get.call(null,inst_25032,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25034 = cljs.core.get.call(null,inst_25032,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25035 = cljs.core.get.call(null,inst_25032,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25036 = inst_25011;
var state_25109__$1 = (function (){var statearr_25160 = state_25109;
(statearr_25160[(16)] = inst_25035);

(statearr_25160[(17)] = inst_25034);

(statearr_25160[(7)] = inst_25036);

(statearr_25160[(18)] = inst_25033);

return statearr_25160;
})();
var statearr_25161_25215 = state_25109__$1;
(statearr_25161_25215[(2)] = null);

(statearr_25161_25215[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (18))){
var inst_25051 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25162_25216 = state_25109__$1;
(statearr_25162_25216[(2)] = inst_25051);

(statearr_25162_25216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (37))){
var state_25109__$1 = state_25109;
var statearr_25163_25217 = state_25109__$1;
(statearr_25163_25217[(2)] = null);

(statearr_25163_25217[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (8))){
var inst_25011 = (state_25109[(8)]);
var inst_25029 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25011);
var state_25109__$1 = state_25109;
var statearr_25164_25218 = state_25109__$1;
(statearr_25164_25218[(2)] = inst_25029);

(statearr_25164_25218[(1)] = (10));


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
});})(c__23405__auto___25172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23293__auto__,c__23405__auto___25172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23294__auto__ = null;
var cljs$core$async$mix_$_state_machine__23294__auto____0 = (function (){
var statearr_25168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25168[(0)] = cljs$core$async$mix_$_state_machine__23294__auto__);

(statearr_25168[(1)] = (1));

return statearr_25168;
});
var cljs$core$async$mix_$_state_machine__23294__auto____1 = (function (state_25109){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25169){if((e25169 instanceof Object)){
var ex__23297__auto__ = e25169;
var statearr_25170_25219 = state_25109;
(statearr_25170_25219[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25220 = state_25109;
state_25109 = G__25220;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23294__auto__ = function(state_25109){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23294__auto____1.call(this,state_25109);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23294__auto____0;
cljs$core$async$mix_$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23294__auto____1;
return cljs$core$async$mix_$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___25172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23407__auto__ = (function (){var statearr_25171 = f__23406__auto__.call(null);
(statearr_25171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___25172);

return statearr_25171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___25172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19962__auto__ = (((p == null))?null:p);
var m__19963__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19963__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19962__auto__ = (((p == null))?null:p);
var m__19963__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,p,v,ch);
} else {
var m__19963__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25221 = [];
var len__20407__auto___25224 = arguments.length;
var i__20408__auto___25225 = (0);
while(true){
if((i__20408__auto___25225 < len__20407__auto___25224)){
args25221.push((arguments[i__20408__auto___25225]));

var G__25226 = (i__20408__auto___25225 + (1));
i__20408__auto___25225 = G__25226;
continue;
} else {
}
break;
}

var G__25223 = args25221.length;
switch (G__25223) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25221.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19962__auto__ = (((p == null))?null:p);
var m__19963__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,p);
} else {
var m__19963__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,p);
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
var x__19962__auto__ = (((p == null))?null:p);
var m__19963__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19962__auto__)]);
if(!((m__19963__auto__ == null))){
return m__19963__auto__.call(null,p,v);
} else {
var m__19963__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19963__auto____$1 == null))){
return m__19963__auto____$1.call(null,p,v);
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
var args25229 = [];
var len__20407__auto___25354 = arguments.length;
var i__20408__auto___25355 = (0);
while(true){
if((i__20408__auto___25355 < len__20407__auto___25354)){
args25229.push((arguments[i__20408__auto___25355]));

var G__25356 = (i__20408__auto___25355 + (1));
i__20408__auto___25355 = G__25356;
continue;
} else {
}
break;
}

var G__25231 = args25229.length;
switch (G__25231) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25229.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19294__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19294__auto__)){
return or__19294__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19294__auto__,mults){
return (function (p1__25228_SHARP_){
if(cljs.core.truth_(p1__25228_SHARP_.call(null,topic))){
return p1__25228_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25228_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19294__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25232 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25233){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25233 = meta25233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25234,meta25233__$1){
var self__ = this;
var _25234__$1 = this;
return (new cljs.core.async.t_cljs$core$async25232(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25233__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25234){
var self__ = this;
var _25234__$1 = this;
return self__.meta25233;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25233","meta25233",-975809832,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25232.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25232";

cljs.core.async.t_cljs$core$async25232.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async25232");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25232 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25232(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25233){
return (new cljs.core.async.t_cljs$core$async25232(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25233));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25232(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23405__auto___25358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___25358,mults,ensure_mult,p){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___25358,mults,ensure_mult,p){
return (function (state_25306){
var state_val_25307 = (state_25306[(1)]);
if((state_val_25307 === (7))){
var inst_25302 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25308_25359 = state_25306__$1;
(statearr_25308_25359[(2)] = inst_25302);

(statearr_25308_25359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (20))){
var state_25306__$1 = state_25306;
var statearr_25309_25360 = state_25306__$1;
(statearr_25309_25360[(2)] = null);

(statearr_25309_25360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (1))){
var state_25306__$1 = state_25306;
var statearr_25310_25361 = state_25306__$1;
(statearr_25310_25361[(2)] = null);

(statearr_25310_25361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (24))){
var inst_25285 = (state_25306[(7)]);
var inst_25294 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25285);
var state_25306__$1 = state_25306;
var statearr_25311_25362 = state_25306__$1;
(statearr_25311_25362[(2)] = inst_25294);

(statearr_25311_25362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (4))){
var inst_25237 = (state_25306[(8)]);
var inst_25237__$1 = (state_25306[(2)]);
var inst_25238 = (inst_25237__$1 == null);
var state_25306__$1 = (function (){var statearr_25312 = state_25306;
(statearr_25312[(8)] = inst_25237__$1);

return statearr_25312;
})();
if(cljs.core.truth_(inst_25238)){
var statearr_25313_25363 = state_25306__$1;
(statearr_25313_25363[(1)] = (5));

} else {
var statearr_25314_25364 = state_25306__$1;
(statearr_25314_25364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (15))){
var inst_25279 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25315_25365 = state_25306__$1;
(statearr_25315_25365[(2)] = inst_25279);

(statearr_25315_25365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (21))){
var inst_25299 = (state_25306[(2)]);
var state_25306__$1 = (function (){var statearr_25316 = state_25306;
(statearr_25316[(9)] = inst_25299);

return statearr_25316;
})();
var statearr_25317_25366 = state_25306__$1;
(statearr_25317_25366[(2)] = null);

(statearr_25317_25366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (13))){
var inst_25261 = (state_25306[(10)]);
var inst_25263 = cljs.core.chunked_seq_QMARK_.call(null,inst_25261);
var state_25306__$1 = state_25306;
if(inst_25263){
var statearr_25318_25367 = state_25306__$1;
(statearr_25318_25367[(1)] = (16));

} else {
var statearr_25319_25368 = state_25306__$1;
(statearr_25319_25368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (22))){
var inst_25291 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
if(cljs.core.truth_(inst_25291)){
var statearr_25320_25369 = state_25306__$1;
(statearr_25320_25369[(1)] = (23));

} else {
var statearr_25321_25370 = state_25306__$1;
(statearr_25321_25370[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (6))){
var inst_25237 = (state_25306[(8)]);
var inst_25285 = (state_25306[(7)]);
var inst_25287 = (state_25306[(11)]);
var inst_25285__$1 = topic_fn.call(null,inst_25237);
var inst_25286 = cljs.core.deref.call(null,mults);
var inst_25287__$1 = cljs.core.get.call(null,inst_25286,inst_25285__$1);
var state_25306__$1 = (function (){var statearr_25322 = state_25306;
(statearr_25322[(7)] = inst_25285__$1);

(statearr_25322[(11)] = inst_25287__$1);

return statearr_25322;
})();
if(cljs.core.truth_(inst_25287__$1)){
var statearr_25323_25371 = state_25306__$1;
(statearr_25323_25371[(1)] = (19));

} else {
var statearr_25324_25372 = state_25306__$1;
(statearr_25324_25372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (25))){
var inst_25296 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25325_25373 = state_25306__$1;
(statearr_25325_25373[(2)] = inst_25296);

(statearr_25325_25373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (17))){
var inst_25261 = (state_25306[(10)]);
var inst_25270 = cljs.core.first.call(null,inst_25261);
var inst_25271 = cljs.core.async.muxch_STAR_.call(null,inst_25270);
var inst_25272 = cljs.core.async.close_BANG_.call(null,inst_25271);
var inst_25273 = cljs.core.next.call(null,inst_25261);
var inst_25247 = inst_25273;
var inst_25248 = null;
var inst_25249 = (0);
var inst_25250 = (0);
var state_25306__$1 = (function (){var statearr_25326 = state_25306;
(statearr_25326[(12)] = inst_25272);

(statearr_25326[(13)] = inst_25250);

(statearr_25326[(14)] = inst_25247);

(statearr_25326[(15)] = inst_25248);

(statearr_25326[(16)] = inst_25249);

return statearr_25326;
})();
var statearr_25327_25374 = state_25306__$1;
(statearr_25327_25374[(2)] = null);

(statearr_25327_25374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (3))){
var inst_25304 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25306__$1,inst_25304);
} else {
if((state_val_25307 === (12))){
var inst_25281 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25328_25375 = state_25306__$1;
(statearr_25328_25375[(2)] = inst_25281);

(statearr_25328_25375[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (2))){
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25306__$1,(4),ch);
} else {
if((state_val_25307 === (23))){
var state_25306__$1 = state_25306;
var statearr_25329_25376 = state_25306__$1;
(statearr_25329_25376[(2)] = null);

(statearr_25329_25376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (19))){
var inst_25237 = (state_25306[(8)]);
var inst_25287 = (state_25306[(11)]);
var inst_25289 = cljs.core.async.muxch_STAR_.call(null,inst_25287);
var state_25306__$1 = state_25306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25306__$1,(22),inst_25289,inst_25237);
} else {
if((state_val_25307 === (11))){
var inst_25261 = (state_25306[(10)]);
var inst_25247 = (state_25306[(14)]);
var inst_25261__$1 = cljs.core.seq.call(null,inst_25247);
var state_25306__$1 = (function (){var statearr_25330 = state_25306;
(statearr_25330[(10)] = inst_25261__$1);

return statearr_25330;
})();
if(inst_25261__$1){
var statearr_25331_25377 = state_25306__$1;
(statearr_25331_25377[(1)] = (13));

} else {
var statearr_25332_25378 = state_25306__$1;
(statearr_25332_25378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (9))){
var inst_25283 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25333_25379 = state_25306__$1;
(statearr_25333_25379[(2)] = inst_25283);

(statearr_25333_25379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (5))){
var inst_25244 = cljs.core.deref.call(null,mults);
var inst_25245 = cljs.core.vals.call(null,inst_25244);
var inst_25246 = cljs.core.seq.call(null,inst_25245);
var inst_25247 = inst_25246;
var inst_25248 = null;
var inst_25249 = (0);
var inst_25250 = (0);
var state_25306__$1 = (function (){var statearr_25334 = state_25306;
(statearr_25334[(13)] = inst_25250);

(statearr_25334[(14)] = inst_25247);

(statearr_25334[(15)] = inst_25248);

(statearr_25334[(16)] = inst_25249);

return statearr_25334;
})();
var statearr_25335_25380 = state_25306__$1;
(statearr_25335_25380[(2)] = null);

(statearr_25335_25380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (14))){
var state_25306__$1 = state_25306;
var statearr_25339_25381 = state_25306__$1;
(statearr_25339_25381[(2)] = null);

(statearr_25339_25381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (16))){
var inst_25261 = (state_25306[(10)]);
var inst_25265 = cljs.core.chunk_first.call(null,inst_25261);
var inst_25266 = cljs.core.chunk_rest.call(null,inst_25261);
var inst_25267 = cljs.core.count.call(null,inst_25265);
var inst_25247 = inst_25266;
var inst_25248 = inst_25265;
var inst_25249 = inst_25267;
var inst_25250 = (0);
var state_25306__$1 = (function (){var statearr_25340 = state_25306;
(statearr_25340[(13)] = inst_25250);

(statearr_25340[(14)] = inst_25247);

(statearr_25340[(15)] = inst_25248);

(statearr_25340[(16)] = inst_25249);

return statearr_25340;
})();
var statearr_25341_25382 = state_25306__$1;
(statearr_25341_25382[(2)] = null);

(statearr_25341_25382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (10))){
var inst_25250 = (state_25306[(13)]);
var inst_25247 = (state_25306[(14)]);
var inst_25248 = (state_25306[(15)]);
var inst_25249 = (state_25306[(16)]);
var inst_25255 = cljs.core._nth.call(null,inst_25248,inst_25250);
var inst_25256 = cljs.core.async.muxch_STAR_.call(null,inst_25255);
var inst_25257 = cljs.core.async.close_BANG_.call(null,inst_25256);
var inst_25258 = (inst_25250 + (1));
var tmp25336 = inst_25247;
var tmp25337 = inst_25248;
var tmp25338 = inst_25249;
var inst_25247__$1 = tmp25336;
var inst_25248__$1 = tmp25337;
var inst_25249__$1 = tmp25338;
var inst_25250__$1 = inst_25258;
var state_25306__$1 = (function (){var statearr_25342 = state_25306;
(statearr_25342[(17)] = inst_25257);

(statearr_25342[(13)] = inst_25250__$1);

(statearr_25342[(14)] = inst_25247__$1);

(statearr_25342[(15)] = inst_25248__$1);

(statearr_25342[(16)] = inst_25249__$1);

return statearr_25342;
})();
var statearr_25343_25383 = state_25306__$1;
(statearr_25343_25383[(2)] = null);

(statearr_25343_25383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (18))){
var inst_25276 = (state_25306[(2)]);
var state_25306__$1 = state_25306;
var statearr_25344_25384 = state_25306__$1;
(statearr_25344_25384[(2)] = inst_25276);

(statearr_25344_25384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25307 === (8))){
var inst_25250 = (state_25306[(13)]);
var inst_25249 = (state_25306[(16)]);
var inst_25252 = (inst_25250 < inst_25249);
var inst_25253 = inst_25252;
var state_25306__$1 = state_25306;
if(cljs.core.truth_(inst_25253)){
var statearr_25345_25385 = state_25306__$1;
(statearr_25345_25385[(1)] = (10));

} else {
var statearr_25346_25386 = state_25306__$1;
(statearr_25346_25386[(1)] = (11));

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
});})(c__23405__auto___25358,mults,ensure_mult,p))
;
return ((function (switch__23293__auto__,c__23405__auto___25358,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_25350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25350[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_25350[(1)] = (1));

return statearr_25350;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_25306){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25351){if((e25351 instanceof Object)){
var ex__23297__auto__ = e25351;
var statearr_25352_25387 = state_25306;
(statearr_25352_25387[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25388 = state_25306;
state_25306 = G__25388;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_25306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_25306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___25358,mults,ensure_mult,p))
})();
var state__23407__auto__ = (function (){var statearr_25353 = f__23406__auto__.call(null);
(statearr_25353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___25358);

return statearr_25353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___25358,mults,ensure_mult,p))
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
var args25389 = [];
var len__20407__auto___25392 = arguments.length;
var i__20408__auto___25393 = (0);
while(true){
if((i__20408__auto___25393 < len__20407__auto___25392)){
args25389.push((arguments[i__20408__auto___25393]));

var G__25394 = (i__20408__auto___25393 + (1));
i__20408__auto___25393 = G__25394;
continue;
} else {
}
break;
}

var G__25391 = args25389.length;
switch (G__25391) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25389.length)].join('')));

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
var args25396 = [];
var len__20407__auto___25399 = arguments.length;
var i__20408__auto___25400 = (0);
while(true){
if((i__20408__auto___25400 < len__20407__auto___25399)){
args25396.push((arguments[i__20408__auto___25400]));

var G__25401 = (i__20408__auto___25400 + (1));
i__20408__auto___25400 = G__25401;
continue;
} else {
}
break;
}

var G__25398 = args25396.length;
switch (G__25398) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25396.length)].join('')));

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
var args25403 = [];
var len__20407__auto___25474 = arguments.length;
var i__20408__auto___25475 = (0);
while(true){
if((i__20408__auto___25475 < len__20407__auto___25474)){
args25403.push((arguments[i__20408__auto___25475]));

var G__25476 = (i__20408__auto___25475 + (1));
i__20408__auto___25475 = G__25476;
continue;
} else {
}
break;
}

var G__25405 = args25403.length;
switch (G__25405) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25403.length)].join('')));

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
var c__23405__auto___25478 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___25478,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___25478,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25444){
var state_val_25445 = (state_25444[(1)]);
if((state_val_25445 === (7))){
var state_25444__$1 = state_25444;
var statearr_25446_25479 = state_25444__$1;
(statearr_25446_25479[(2)] = null);

(statearr_25446_25479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (1))){
var state_25444__$1 = state_25444;
var statearr_25447_25480 = state_25444__$1;
(statearr_25447_25480[(2)] = null);

(statearr_25447_25480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (4))){
var inst_25408 = (state_25444[(7)]);
var inst_25410 = (inst_25408 < cnt);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25410)){
var statearr_25448_25481 = state_25444__$1;
(statearr_25448_25481[(1)] = (6));

} else {
var statearr_25449_25482 = state_25444__$1;
(statearr_25449_25482[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (15))){
var inst_25440 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25450_25483 = state_25444__$1;
(statearr_25450_25483[(2)] = inst_25440);

(statearr_25450_25483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (13))){
var inst_25433 = cljs.core.async.close_BANG_.call(null,out);
var state_25444__$1 = state_25444;
var statearr_25451_25484 = state_25444__$1;
(statearr_25451_25484[(2)] = inst_25433);

(statearr_25451_25484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (6))){
var state_25444__$1 = state_25444;
var statearr_25452_25485 = state_25444__$1;
(statearr_25452_25485[(2)] = null);

(statearr_25452_25485[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (3))){
var inst_25442 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25444__$1,inst_25442);
} else {
if((state_val_25445 === (12))){
var inst_25430 = (state_25444[(8)]);
var inst_25430__$1 = (state_25444[(2)]);
var inst_25431 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25430__$1);
var state_25444__$1 = (function (){var statearr_25453 = state_25444;
(statearr_25453[(8)] = inst_25430__$1);

return statearr_25453;
})();
if(cljs.core.truth_(inst_25431)){
var statearr_25454_25486 = state_25444__$1;
(statearr_25454_25486[(1)] = (13));

} else {
var statearr_25455_25487 = state_25444__$1;
(statearr_25455_25487[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (2))){
var inst_25407 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25408 = (0);
var state_25444__$1 = (function (){var statearr_25456 = state_25444;
(statearr_25456[(7)] = inst_25408);

(statearr_25456[(9)] = inst_25407);

return statearr_25456;
})();
var statearr_25457_25488 = state_25444__$1;
(statearr_25457_25488[(2)] = null);

(statearr_25457_25488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (11))){
var inst_25408 = (state_25444[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25444,(10),Object,null,(9));
var inst_25417 = chs__$1.call(null,inst_25408);
var inst_25418 = done.call(null,inst_25408);
var inst_25419 = cljs.core.async.take_BANG_.call(null,inst_25417,inst_25418);
var state_25444__$1 = state_25444;
var statearr_25458_25489 = state_25444__$1;
(statearr_25458_25489[(2)] = inst_25419);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25444__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (9))){
var inst_25408 = (state_25444[(7)]);
var inst_25421 = (state_25444[(2)]);
var inst_25422 = (inst_25408 + (1));
var inst_25408__$1 = inst_25422;
var state_25444__$1 = (function (){var statearr_25459 = state_25444;
(statearr_25459[(10)] = inst_25421);

(statearr_25459[(7)] = inst_25408__$1);

return statearr_25459;
})();
var statearr_25460_25490 = state_25444__$1;
(statearr_25460_25490[(2)] = null);

(statearr_25460_25490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (5))){
var inst_25428 = (state_25444[(2)]);
var state_25444__$1 = (function (){var statearr_25461 = state_25444;
(statearr_25461[(11)] = inst_25428);

return statearr_25461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(12),dchan);
} else {
if((state_val_25445 === (14))){
var inst_25430 = (state_25444[(8)]);
var inst_25435 = cljs.core.apply.call(null,f,inst_25430);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25444__$1,(16),out,inst_25435);
} else {
if((state_val_25445 === (16))){
var inst_25437 = (state_25444[(2)]);
var state_25444__$1 = (function (){var statearr_25462 = state_25444;
(statearr_25462[(12)] = inst_25437);

return statearr_25462;
})();
var statearr_25463_25491 = state_25444__$1;
(statearr_25463_25491[(2)] = null);

(statearr_25463_25491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (10))){
var inst_25412 = (state_25444[(2)]);
var inst_25413 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25444__$1 = (function (){var statearr_25464 = state_25444;
(statearr_25464[(13)] = inst_25412);

return statearr_25464;
})();
var statearr_25465_25492 = state_25444__$1;
(statearr_25465_25492[(2)] = inst_25413);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25444__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (8))){
var inst_25426 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25466_25493 = state_25444__$1;
(statearr_25466_25493[(2)] = inst_25426);

(statearr_25466_25493[(1)] = (5));


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
});})(c__23405__auto___25478,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23293__auto__,c__23405__auto___25478,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_25470 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25470[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_25470[(1)] = (1));

return statearr_25470;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_25444){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25471){if((e25471 instanceof Object)){
var ex__23297__auto__ = e25471;
var statearr_25472_25494 = state_25444;
(statearr_25472_25494[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25495 = state_25444;
state_25444 = G__25495;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_25444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_25444);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___25478,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23407__auto__ = (function (){var statearr_25473 = f__23406__auto__.call(null);
(statearr_25473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___25478);

return statearr_25473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___25478,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25497 = [];
var len__20407__auto___25555 = arguments.length;
var i__20408__auto___25556 = (0);
while(true){
if((i__20408__auto___25556 < len__20407__auto___25555)){
args25497.push((arguments[i__20408__auto___25556]));

var G__25557 = (i__20408__auto___25556 + (1));
i__20408__auto___25556 = G__25557;
continue;
} else {
}
break;
}

var G__25499 = args25497.length;
switch (G__25499) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25497.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23405__auto___25559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___25559,out){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___25559,out){
return (function (state_25531){
var state_val_25532 = (state_25531[(1)]);
if((state_val_25532 === (7))){
var inst_25510 = (state_25531[(7)]);
var inst_25511 = (state_25531[(8)]);
var inst_25510__$1 = (state_25531[(2)]);
var inst_25511__$1 = cljs.core.nth.call(null,inst_25510__$1,(0),null);
var inst_25512 = cljs.core.nth.call(null,inst_25510__$1,(1),null);
var inst_25513 = (inst_25511__$1 == null);
var state_25531__$1 = (function (){var statearr_25533 = state_25531;
(statearr_25533[(9)] = inst_25512);

(statearr_25533[(7)] = inst_25510__$1);

(statearr_25533[(8)] = inst_25511__$1);

return statearr_25533;
})();
if(cljs.core.truth_(inst_25513)){
var statearr_25534_25560 = state_25531__$1;
(statearr_25534_25560[(1)] = (8));

} else {
var statearr_25535_25561 = state_25531__$1;
(statearr_25535_25561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (1))){
var inst_25500 = cljs.core.vec.call(null,chs);
var inst_25501 = inst_25500;
var state_25531__$1 = (function (){var statearr_25536 = state_25531;
(statearr_25536[(10)] = inst_25501);

return statearr_25536;
})();
var statearr_25537_25562 = state_25531__$1;
(statearr_25537_25562[(2)] = null);

(statearr_25537_25562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (4))){
var inst_25501 = (state_25531[(10)]);
var state_25531__$1 = state_25531;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25531__$1,(7),inst_25501);
} else {
if((state_val_25532 === (6))){
var inst_25527 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25538_25563 = state_25531__$1;
(statearr_25538_25563[(2)] = inst_25527);

(statearr_25538_25563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (3))){
var inst_25529 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25531__$1,inst_25529);
} else {
if((state_val_25532 === (2))){
var inst_25501 = (state_25531[(10)]);
var inst_25503 = cljs.core.count.call(null,inst_25501);
var inst_25504 = (inst_25503 > (0));
var state_25531__$1 = state_25531;
if(cljs.core.truth_(inst_25504)){
var statearr_25540_25564 = state_25531__$1;
(statearr_25540_25564[(1)] = (4));

} else {
var statearr_25541_25565 = state_25531__$1;
(statearr_25541_25565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (11))){
var inst_25501 = (state_25531[(10)]);
var inst_25520 = (state_25531[(2)]);
var tmp25539 = inst_25501;
var inst_25501__$1 = tmp25539;
var state_25531__$1 = (function (){var statearr_25542 = state_25531;
(statearr_25542[(11)] = inst_25520);

(statearr_25542[(10)] = inst_25501__$1);

return statearr_25542;
})();
var statearr_25543_25566 = state_25531__$1;
(statearr_25543_25566[(2)] = null);

(statearr_25543_25566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (9))){
var inst_25511 = (state_25531[(8)]);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25531__$1,(11),out,inst_25511);
} else {
if((state_val_25532 === (5))){
var inst_25525 = cljs.core.async.close_BANG_.call(null,out);
var state_25531__$1 = state_25531;
var statearr_25544_25567 = state_25531__$1;
(statearr_25544_25567[(2)] = inst_25525);

(statearr_25544_25567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (10))){
var inst_25523 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25545_25568 = state_25531__$1;
(statearr_25545_25568[(2)] = inst_25523);

(statearr_25545_25568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (8))){
var inst_25512 = (state_25531[(9)]);
var inst_25510 = (state_25531[(7)]);
var inst_25511 = (state_25531[(8)]);
var inst_25501 = (state_25531[(10)]);
var inst_25515 = (function (){var cs = inst_25501;
var vec__25506 = inst_25510;
var v = inst_25511;
var c = inst_25512;
return ((function (cs,vec__25506,v,c,inst_25512,inst_25510,inst_25511,inst_25501,state_val_25532,c__23405__auto___25559,out){
return (function (p1__25496_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25496_SHARP_);
});
;})(cs,vec__25506,v,c,inst_25512,inst_25510,inst_25511,inst_25501,state_val_25532,c__23405__auto___25559,out))
})();
var inst_25516 = cljs.core.filterv.call(null,inst_25515,inst_25501);
var inst_25501__$1 = inst_25516;
var state_25531__$1 = (function (){var statearr_25546 = state_25531;
(statearr_25546[(10)] = inst_25501__$1);

return statearr_25546;
})();
var statearr_25547_25569 = state_25531__$1;
(statearr_25547_25569[(2)] = null);

(statearr_25547_25569[(1)] = (2));


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
});})(c__23405__auto___25559,out))
;
return ((function (switch__23293__auto__,c__23405__auto___25559,out){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_25551 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25551[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_25551[(1)] = (1));

return statearr_25551;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_25531){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25552){if((e25552 instanceof Object)){
var ex__23297__auto__ = e25552;
var statearr_25553_25570 = state_25531;
(statearr_25553_25570[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25571 = state_25531;
state_25531 = G__25571;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___25559,out))
})();
var state__23407__auto__ = (function (){var statearr_25554 = f__23406__auto__.call(null);
(statearr_25554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___25559);

return statearr_25554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___25559,out))
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
var args25572 = [];
var len__20407__auto___25621 = arguments.length;
var i__20408__auto___25622 = (0);
while(true){
if((i__20408__auto___25622 < len__20407__auto___25621)){
args25572.push((arguments[i__20408__auto___25622]));

var G__25623 = (i__20408__auto___25622 + (1));
i__20408__auto___25622 = G__25623;
continue;
} else {
}
break;
}

var G__25574 = args25572.length;
switch (G__25574) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25572.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23405__auto___25625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___25625,out){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___25625,out){
return (function (state_25598){
var state_val_25599 = (state_25598[(1)]);
if((state_val_25599 === (7))){
var inst_25580 = (state_25598[(7)]);
var inst_25580__$1 = (state_25598[(2)]);
var inst_25581 = (inst_25580__$1 == null);
var inst_25582 = cljs.core.not.call(null,inst_25581);
var state_25598__$1 = (function (){var statearr_25600 = state_25598;
(statearr_25600[(7)] = inst_25580__$1);

return statearr_25600;
})();
if(inst_25582){
var statearr_25601_25626 = state_25598__$1;
(statearr_25601_25626[(1)] = (8));

} else {
var statearr_25602_25627 = state_25598__$1;
(statearr_25602_25627[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (1))){
var inst_25575 = (0);
var state_25598__$1 = (function (){var statearr_25603 = state_25598;
(statearr_25603[(8)] = inst_25575);

return statearr_25603;
})();
var statearr_25604_25628 = state_25598__$1;
(statearr_25604_25628[(2)] = null);

(statearr_25604_25628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (4))){
var state_25598__$1 = state_25598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25598__$1,(7),ch);
} else {
if((state_val_25599 === (6))){
var inst_25593 = (state_25598[(2)]);
var state_25598__$1 = state_25598;
var statearr_25605_25629 = state_25598__$1;
(statearr_25605_25629[(2)] = inst_25593);

(statearr_25605_25629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (3))){
var inst_25595 = (state_25598[(2)]);
var inst_25596 = cljs.core.async.close_BANG_.call(null,out);
var state_25598__$1 = (function (){var statearr_25606 = state_25598;
(statearr_25606[(9)] = inst_25595);

return statearr_25606;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25598__$1,inst_25596);
} else {
if((state_val_25599 === (2))){
var inst_25575 = (state_25598[(8)]);
var inst_25577 = (inst_25575 < n);
var state_25598__$1 = state_25598;
if(cljs.core.truth_(inst_25577)){
var statearr_25607_25630 = state_25598__$1;
(statearr_25607_25630[(1)] = (4));

} else {
var statearr_25608_25631 = state_25598__$1;
(statearr_25608_25631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (11))){
var inst_25575 = (state_25598[(8)]);
var inst_25585 = (state_25598[(2)]);
var inst_25586 = (inst_25575 + (1));
var inst_25575__$1 = inst_25586;
var state_25598__$1 = (function (){var statearr_25609 = state_25598;
(statearr_25609[(8)] = inst_25575__$1);

(statearr_25609[(10)] = inst_25585);

return statearr_25609;
})();
var statearr_25610_25632 = state_25598__$1;
(statearr_25610_25632[(2)] = null);

(statearr_25610_25632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (9))){
var state_25598__$1 = state_25598;
var statearr_25611_25633 = state_25598__$1;
(statearr_25611_25633[(2)] = null);

(statearr_25611_25633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (5))){
var state_25598__$1 = state_25598;
var statearr_25612_25634 = state_25598__$1;
(statearr_25612_25634[(2)] = null);

(statearr_25612_25634[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (10))){
var inst_25590 = (state_25598[(2)]);
var state_25598__$1 = state_25598;
var statearr_25613_25635 = state_25598__$1;
(statearr_25613_25635[(2)] = inst_25590);

(statearr_25613_25635[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25599 === (8))){
var inst_25580 = (state_25598[(7)]);
var state_25598__$1 = state_25598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25598__$1,(11),out,inst_25580);
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
});})(c__23405__auto___25625,out))
;
return ((function (switch__23293__auto__,c__23405__auto___25625,out){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_25617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25617[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_25617[(1)] = (1));

return statearr_25617;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_25598){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25618){if((e25618 instanceof Object)){
var ex__23297__auto__ = e25618;
var statearr_25619_25636 = state_25598;
(statearr_25619_25636[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25637 = state_25598;
state_25598 = G__25637;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_25598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_25598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___25625,out))
})();
var state__23407__auto__ = (function (){var statearr_25620 = f__23406__auto__.call(null);
(statearr_25620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___25625);

return statearr_25620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___25625,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25645 = (function (f,ch,meta25646){
this.f = f;
this.ch = ch;
this.meta25646 = meta25646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25647,meta25646__$1){
var self__ = this;
var _25647__$1 = this;
return (new cljs.core.async.t_cljs$core$async25645(self__.f,self__.ch,meta25646__$1));
});

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25647){
var self__ = this;
var _25647__$1 = this;
return self__.meta25646;
});

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25648 = (function (f,ch,meta25646,_,fn1,meta25649){
this.f = f;
this.ch = ch;
this.meta25646 = meta25646;
this._ = _;
this.fn1 = fn1;
this.meta25649 = meta25649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25650,meta25649__$1){
var self__ = this;
var _25650__$1 = this;
return (new cljs.core.async.t_cljs$core$async25648(self__.f,self__.ch,self__.meta25646,self__._,self__.fn1,meta25649__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25650){
var self__ = this;
var _25650__$1 = this;
return self__.meta25649;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25648.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25638_SHARP_){
return f1.call(null,(((p1__25638_SHARP_ == null))?null:self__.f.call(null,p1__25638_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25648.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25646","meta25646",802173765,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25645","cljs.core.async/t_cljs$core$async25645",1460745806,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25649","meta25649",-1114013517,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25648.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25648";

cljs.core.async.t_cljs$core$async25648.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async25648");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25648 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25648(f__$1,ch__$1,meta25646__$1,___$2,fn1__$1,meta25649){
return (new cljs.core.async.t_cljs$core$async25648(f__$1,ch__$1,meta25646__$1,___$2,fn1__$1,meta25649));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25648(self__.f,self__.ch,self__.meta25646,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19282__auto__ = ret;
if(cljs.core.truth_(and__19282__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19282__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25646","meta25646",802173765,null)], null);
});

cljs.core.async.t_cljs$core$async25645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25645";

cljs.core.async.t_cljs$core$async25645.cljs$lang$ctorPrWriter = (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async25645");
});

cljs.core.async.__GT_t_cljs$core$async25645 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25645(f__$1,ch__$1,meta25646){
return (new cljs.core.async.t_cljs$core$async25645(f__$1,ch__$1,meta25646));
});

}

return (new cljs.core.async.t_cljs$core$async25645(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25654 = (function (f,ch,meta25655){
this.f = f;
this.ch = ch;
this.meta25655 = meta25655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25656,meta25655__$1){
var self__ = this;
var _25656__$1 = this;
return (new cljs.core.async.t_cljs$core$async25654(self__.f,self__.ch,meta25655__$1));
});

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25656){
var self__ = this;
var _25656__$1 = this;
return self__.meta25655;
});

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25654.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25655","meta25655",851520751,null)], null);
});

cljs.core.async.t_cljs$core$async25654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25654";

cljs.core.async.t_cljs$core$async25654.cljs$lang$ctorPrWriter = (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async25654");
});

cljs.core.async.__GT_t_cljs$core$async25654 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25654(f__$1,ch__$1,meta25655){
return (new cljs.core.async.t_cljs$core$async25654(f__$1,ch__$1,meta25655));
});

}

return (new cljs.core.async.t_cljs$core$async25654(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25660 = (function (p,ch,meta25661){
this.p = p;
this.ch = ch;
this.meta25661 = meta25661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25662,meta25661__$1){
var self__ = this;
var _25662__$1 = this;
return (new cljs.core.async.t_cljs$core$async25660(self__.p,self__.ch,meta25661__$1));
});

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25662){
var self__ = this;
var _25662__$1 = this;
return self__.meta25661;
});

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25661","meta25661",21007694,null)], null);
});

cljs.core.async.t_cljs$core$async25660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25660";

cljs.core.async.t_cljs$core$async25660.cljs$lang$ctorPrWriter = (function (this__19905__auto__,writer__19906__auto__,opt__19907__auto__){
return cljs.core._write.call(null,writer__19906__auto__,"cljs.core.async/t_cljs$core$async25660");
});

cljs.core.async.__GT_t_cljs$core$async25660 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25660(p__$1,ch__$1,meta25661){
return (new cljs.core.async.t_cljs$core$async25660(p__$1,ch__$1,meta25661));
});

}

return (new cljs.core.async.t_cljs$core$async25660(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25663 = [];
var len__20407__auto___25707 = arguments.length;
var i__20408__auto___25708 = (0);
while(true){
if((i__20408__auto___25708 < len__20407__auto___25707)){
args25663.push((arguments[i__20408__auto___25708]));

var G__25709 = (i__20408__auto___25708 + (1));
i__20408__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var G__25665 = args25663.length;
switch (G__25665) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25663.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23405__auto___25711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___25711,out){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___25711,out){
return (function (state_25686){
var state_val_25687 = (state_25686[(1)]);
if((state_val_25687 === (7))){
var inst_25682 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25688_25712 = state_25686__$1;
(statearr_25688_25712[(2)] = inst_25682);

(statearr_25688_25712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (1))){
var state_25686__$1 = state_25686;
var statearr_25689_25713 = state_25686__$1;
(statearr_25689_25713[(2)] = null);

(statearr_25689_25713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (4))){
var inst_25668 = (state_25686[(7)]);
var inst_25668__$1 = (state_25686[(2)]);
var inst_25669 = (inst_25668__$1 == null);
var state_25686__$1 = (function (){var statearr_25690 = state_25686;
(statearr_25690[(7)] = inst_25668__$1);

return statearr_25690;
})();
if(cljs.core.truth_(inst_25669)){
var statearr_25691_25714 = state_25686__$1;
(statearr_25691_25714[(1)] = (5));

} else {
var statearr_25692_25715 = state_25686__$1;
(statearr_25692_25715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (6))){
var inst_25668 = (state_25686[(7)]);
var inst_25673 = p.call(null,inst_25668);
var state_25686__$1 = state_25686;
if(cljs.core.truth_(inst_25673)){
var statearr_25693_25716 = state_25686__$1;
(statearr_25693_25716[(1)] = (8));

} else {
var statearr_25694_25717 = state_25686__$1;
(statearr_25694_25717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (3))){
var inst_25684 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25686__$1,inst_25684);
} else {
if((state_val_25687 === (2))){
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25686__$1,(4),ch);
} else {
if((state_val_25687 === (11))){
var inst_25676 = (state_25686[(2)]);
var state_25686__$1 = state_25686;
var statearr_25695_25718 = state_25686__$1;
(statearr_25695_25718[(2)] = inst_25676);

(statearr_25695_25718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (9))){
var state_25686__$1 = state_25686;
var statearr_25696_25719 = state_25686__$1;
(statearr_25696_25719[(2)] = null);

(statearr_25696_25719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (5))){
var inst_25671 = cljs.core.async.close_BANG_.call(null,out);
var state_25686__$1 = state_25686;
var statearr_25697_25720 = state_25686__$1;
(statearr_25697_25720[(2)] = inst_25671);

(statearr_25697_25720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (10))){
var inst_25679 = (state_25686[(2)]);
var state_25686__$1 = (function (){var statearr_25698 = state_25686;
(statearr_25698[(8)] = inst_25679);

return statearr_25698;
})();
var statearr_25699_25721 = state_25686__$1;
(statearr_25699_25721[(2)] = null);

(statearr_25699_25721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25687 === (8))){
var inst_25668 = (state_25686[(7)]);
var state_25686__$1 = state_25686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25686__$1,(11),out,inst_25668);
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
});})(c__23405__auto___25711,out))
;
return ((function (switch__23293__auto__,c__23405__auto___25711,out){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_25703 = [null,null,null,null,null,null,null,null,null];
(statearr_25703[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_25703[(1)] = (1));

return statearr_25703;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_25686){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25704){if((e25704 instanceof Object)){
var ex__23297__auto__ = e25704;
var statearr_25705_25722 = state_25686;
(statearr_25705_25722[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25723 = state_25686;
state_25686 = G__25723;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_25686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_25686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___25711,out))
})();
var state__23407__auto__ = (function (){var statearr_25706 = f__23406__auto__.call(null);
(statearr_25706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___25711);

return statearr_25706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___25711,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25724 = [];
var len__20407__auto___25727 = arguments.length;
var i__20408__auto___25728 = (0);
while(true){
if((i__20408__auto___25728 < len__20407__auto___25727)){
args25724.push((arguments[i__20408__auto___25728]));

var G__25729 = (i__20408__auto___25728 + (1));
i__20408__auto___25728 = G__25729;
continue;
} else {
}
break;
}

var G__25726 = args25724.length;
switch (G__25726) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25724.length)].join('')));

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
var c__23405__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto__){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto__){
return (function (state_25896){
var state_val_25897 = (state_25896[(1)]);
if((state_val_25897 === (7))){
var inst_25892 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25898_25939 = state_25896__$1;
(statearr_25898_25939[(2)] = inst_25892);

(statearr_25898_25939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (20))){
var inst_25862 = (state_25896[(7)]);
var inst_25873 = (state_25896[(2)]);
var inst_25874 = cljs.core.next.call(null,inst_25862);
var inst_25848 = inst_25874;
var inst_25849 = null;
var inst_25850 = (0);
var inst_25851 = (0);
var state_25896__$1 = (function (){var statearr_25899 = state_25896;
(statearr_25899[(8)] = inst_25851);

(statearr_25899[(9)] = inst_25849);

(statearr_25899[(10)] = inst_25848);

(statearr_25899[(11)] = inst_25873);

(statearr_25899[(12)] = inst_25850);

return statearr_25899;
})();
var statearr_25900_25940 = state_25896__$1;
(statearr_25900_25940[(2)] = null);

(statearr_25900_25940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (1))){
var state_25896__$1 = state_25896;
var statearr_25901_25941 = state_25896__$1;
(statearr_25901_25941[(2)] = null);

(statearr_25901_25941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (4))){
var inst_25837 = (state_25896[(13)]);
var inst_25837__$1 = (state_25896[(2)]);
var inst_25838 = (inst_25837__$1 == null);
var state_25896__$1 = (function (){var statearr_25902 = state_25896;
(statearr_25902[(13)] = inst_25837__$1);

return statearr_25902;
})();
if(cljs.core.truth_(inst_25838)){
var statearr_25903_25942 = state_25896__$1;
(statearr_25903_25942[(1)] = (5));

} else {
var statearr_25904_25943 = state_25896__$1;
(statearr_25904_25943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (15))){
var state_25896__$1 = state_25896;
var statearr_25908_25944 = state_25896__$1;
(statearr_25908_25944[(2)] = null);

(statearr_25908_25944[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (21))){
var state_25896__$1 = state_25896;
var statearr_25909_25945 = state_25896__$1;
(statearr_25909_25945[(2)] = null);

(statearr_25909_25945[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (13))){
var inst_25851 = (state_25896[(8)]);
var inst_25849 = (state_25896[(9)]);
var inst_25848 = (state_25896[(10)]);
var inst_25850 = (state_25896[(12)]);
var inst_25858 = (state_25896[(2)]);
var inst_25859 = (inst_25851 + (1));
var tmp25905 = inst_25849;
var tmp25906 = inst_25848;
var tmp25907 = inst_25850;
var inst_25848__$1 = tmp25906;
var inst_25849__$1 = tmp25905;
var inst_25850__$1 = tmp25907;
var inst_25851__$1 = inst_25859;
var state_25896__$1 = (function (){var statearr_25910 = state_25896;
(statearr_25910[(14)] = inst_25858);

(statearr_25910[(8)] = inst_25851__$1);

(statearr_25910[(9)] = inst_25849__$1);

(statearr_25910[(10)] = inst_25848__$1);

(statearr_25910[(12)] = inst_25850__$1);

return statearr_25910;
})();
var statearr_25911_25946 = state_25896__$1;
(statearr_25911_25946[(2)] = null);

(statearr_25911_25946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (22))){
var state_25896__$1 = state_25896;
var statearr_25912_25947 = state_25896__$1;
(statearr_25912_25947[(2)] = null);

(statearr_25912_25947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (6))){
var inst_25837 = (state_25896[(13)]);
var inst_25846 = f.call(null,inst_25837);
var inst_25847 = cljs.core.seq.call(null,inst_25846);
var inst_25848 = inst_25847;
var inst_25849 = null;
var inst_25850 = (0);
var inst_25851 = (0);
var state_25896__$1 = (function (){var statearr_25913 = state_25896;
(statearr_25913[(8)] = inst_25851);

(statearr_25913[(9)] = inst_25849);

(statearr_25913[(10)] = inst_25848);

(statearr_25913[(12)] = inst_25850);

return statearr_25913;
})();
var statearr_25914_25948 = state_25896__$1;
(statearr_25914_25948[(2)] = null);

(statearr_25914_25948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (17))){
var inst_25862 = (state_25896[(7)]);
var inst_25866 = cljs.core.chunk_first.call(null,inst_25862);
var inst_25867 = cljs.core.chunk_rest.call(null,inst_25862);
var inst_25868 = cljs.core.count.call(null,inst_25866);
var inst_25848 = inst_25867;
var inst_25849 = inst_25866;
var inst_25850 = inst_25868;
var inst_25851 = (0);
var state_25896__$1 = (function (){var statearr_25915 = state_25896;
(statearr_25915[(8)] = inst_25851);

(statearr_25915[(9)] = inst_25849);

(statearr_25915[(10)] = inst_25848);

(statearr_25915[(12)] = inst_25850);

return statearr_25915;
})();
var statearr_25916_25949 = state_25896__$1;
(statearr_25916_25949[(2)] = null);

(statearr_25916_25949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (3))){
var inst_25894 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25896__$1,inst_25894);
} else {
if((state_val_25897 === (12))){
var inst_25882 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25917_25950 = state_25896__$1;
(statearr_25917_25950[(2)] = inst_25882);

(statearr_25917_25950[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (2))){
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25896__$1,(4),in$);
} else {
if((state_val_25897 === (23))){
var inst_25890 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25918_25951 = state_25896__$1;
(statearr_25918_25951[(2)] = inst_25890);

(statearr_25918_25951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (19))){
var inst_25877 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25919_25952 = state_25896__$1;
(statearr_25919_25952[(2)] = inst_25877);

(statearr_25919_25952[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (11))){
var inst_25848 = (state_25896[(10)]);
var inst_25862 = (state_25896[(7)]);
var inst_25862__$1 = cljs.core.seq.call(null,inst_25848);
var state_25896__$1 = (function (){var statearr_25920 = state_25896;
(statearr_25920[(7)] = inst_25862__$1);

return statearr_25920;
})();
if(inst_25862__$1){
var statearr_25921_25953 = state_25896__$1;
(statearr_25921_25953[(1)] = (14));

} else {
var statearr_25922_25954 = state_25896__$1;
(statearr_25922_25954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (9))){
var inst_25884 = (state_25896[(2)]);
var inst_25885 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25896__$1 = (function (){var statearr_25923 = state_25896;
(statearr_25923[(15)] = inst_25884);

return statearr_25923;
})();
if(cljs.core.truth_(inst_25885)){
var statearr_25924_25955 = state_25896__$1;
(statearr_25924_25955[(1)] = (21));

} else {
var statearr_25925_25956 = state_25896__$1;
(statearr_25925_25956[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (5))){
var inst_25840 = cljs.core.async.close_BANG_.call(null,out);
var state_25896__$1 = state_25896;
var statearr_25926_25957 = state_25896__$1;
(statearr_25926_25957[(2)] = inst_25840);

(statearr_25926_25957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (14))){
var inst_25862 = (state_25896[(7)]);
var inst_25864 = cljs.core.chunked_seq_QMARK_.call(null,inst_25862);
var state_25896__$1 = state_25896;
if(inst_25864){
var statearr_25927_25958 = state_25896__$1;
(statearr_25927_25958[(1)] = (17));

} else {
var statearr_25928_25959 = state_25896__$1;
(statearr_25928_25959[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (16))){
var inst_25880 = (state_25896[(2)]);
var state_25896__$1 = state_25896;
var statearr_25929_25960 = state_25896__$1;
(statearr_25929_25960[(2)] = inst_25880);

(statearr_25929_25960[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25897 === (10))){
var inst_25851 = (state_25896[(8)]);
var inst_25849 = (state_25896[(9)]);
var inst_25856 = cljs.core._nth.call(null,inst_25849,inst_25851);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25896__$1,(13),out,inst_25856);
} else {
if((state_val_25897 === (18))){
var inst_25862 = (state_25896[(7)]);
var inst_25871 = cljs.core.first.call(null,inst_25862);
var state_25896__$1 = state_25896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25896__$1,(20),out,inst_25871);
} else {
if((state_val_25897 === (8))){
var inst_25851 = (state_25896[(8)]);
var inst_25850 = (state_25896[(12)]);
var inst_25853 = (inst_25851 < inst_25850);
var inst_25854 = inst_25853;
var state_25896__$1 = state_25896;
if(cljs.core.truth_(inst_25854)){
var statearr_25930_25961 = state_25896__$1;
(statearr_25930_25961[(1)] = (10));

} else {
var statearr_25931_25962 = state_25896__$1;
(statearr_25931_25962[(1)] = (11));

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
});})(c__23405__auto__))
;
return ((function (switch__23293__auto__,c__23405__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23294__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23294__auto____0 = (function (){
var statearr_25935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25935[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23294__auto__);

(statearr_25935[(1)] = (1));

return statearr_25935;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23294__auto____1 = (function (state_25896){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_25896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e25936){if((e25936 instanceof Object)){
var ex__23297__auto__ = e25936;
var statearr_25937_25963 = state_25896;
(statearr_25937_25963[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25964 = state_25896;
state_25896 = G__25964;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23294__auto__ = function(state_25896){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23294__auto____1.call(this,state_25896);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23294__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23294__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto__))
})();
var state__23407__auto__ = (function (){var statearr_25938 = f__23406__auto__.call(null);
(statearr_25938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto__);

return statearr_25938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto__))
);

return c__23405__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25965 = [];
var len__20407__auto___25968 = arguments.length;
var i__20408__auto___25969 = (0);
while(true){
if((i__20408__auto___25969 < len__20407__auto___25968)){
args25965.push((arguments[i__20408__auto___25969]));

var G__25970 = (i__20408__auto___25969 + (1));
i__20408__auto___25969 = G__25970;
continue;
} else {
}
break;
}

var G__25967 = args25965.length;
switch (G__25967) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25965.length)].join('')));

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
var args25972 = [];
var len__20407__auto___25975 = arguments.length;
var i__20408__auto___25976 = (0);
while(true){
if((i__20408__auto___25976 < len__20407__auto___25975)){
args25972.push((arguments[i__20408__auto___25976]));

var G__25977 = (i__20408__auto___25976 + (1));
i__20408__auto___25976 = G__25977;
continue;
} else {
}
break;
}

var G__25974 = args25972.length;
switch (G__25974) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25972.length)].join('')));

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
var args25979 = [];
var len__20407__auto___26030 = arguments.length;
var i__20408__auto___26031 = (0);
while(true){
if((i__20408__auto___26031 < len__20407__auto___26030)){
args25979.push((arguments[i__20408__auto___26031]));

var G__26032 = (i__20408__auto___26031 + (1));
i__20408__auto___26031 = G__26032;
continue;
} else {
}
break;
}

var G__25981 = args25979.length;
switch (G__25981) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25979.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23405__auto___26034 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___26034,out){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___26034,out){
return (function (state_26005){
var state_val_26006 = (state_26005[(1)]);
if((state_val_26006 === (7))){
var inst_26000 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
var statearr_26007_26035 = state_26005__$1;
(statearr_26007_26035[(2)] = inst_26000);

(statearr_26007_26035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (1))){
var inst_25982 = null;
var state_26005__$1 = (function (){var statearr_26008 = state_26005;
(statearr_26008[(7)] = inst_25982);

return statearr_26008;
})();
var statearr_26009_26036 = state_26005__$1;
(statearr_26009_26036[(2)] = null);

(statearr_26009_26036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (4))){
var inst_25985 = (state_26005[(8)]);
var inst_25985__$1 = (state_26005[(2)]);
var inst_25986 = (inst_25985__$1 == null);
var inst_25987 = cljs.core.not.call(null,inst_25986);
var state_26005__$1 = (function (){var statearr_26010 = state_26005;
(statearr_26010[(8)] = inst_25985__$1);

return statearr_26010;
})();
if(inst_25987){
var statearr_26011_26037 = state_26005__$1;
(statearr_26011_26037[(1)] = (5));

} else {
var statearr_26012_26038 = state_26005__$1;
(statearr_26012_26038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (6))){
var state_26005__$1 = state_26005;
var statearr_26013_26039 = state_26005__$1;
(statearr_26013_26039[(2)] = null);

(statearr_26013_26039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (3))){
var inst_26002 = (state_26005[(2)]);
var inst_26003 = cljs.core.async.close_BANG_.call(null,out);
var state_26005__$1 = (function (){var statearr_26014 = state_26005;
(statearr_26014[(9)] = inst_26002);

return statearr_26014;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26005__$1,inst_26003);
} else {
if((state_val_26006 === (2))){
var state_26005__$1 = state_26005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26005__$1,(4),ch);
} else {
if((state_val_26006 === (11))){
var inst_25985 = (state_26005[(8)]);
var inst_25994 = (state_26005[(2)]);
var inst_25982 = inst_25985;
var state_26005__$1 = (function (){var statearr_26015 = state_26005;
(statearr_26015[(7)] = inst_25982);

(statearr_26015[(10)] = inst_25994);

return statearr_26015;
})();
var statearr_26016_26040 = state_26005__$1;
(statearr_26016_26040[(2)] = null);

(statearr_26016_26040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (9))){
var inst_25985 = (state_26005[(8)]);
var state_26005__$1 = state_26005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26005__$1,(11),out,inst_25985);
} else {
if((state_val_26006 === (5))){
var inst_25982 = (state_26005[(7)]);
var inst_25985 = (state_26005[(8)]);
var inst_25989 = cljs.core._EQ_.call(null,inst_25985,inst_25982);
var state_26005__$1 = state_26005;
if(inst_25989){
var statearr_26018_26041 = state_26005__$1;
(statearr_26018_26041[(1)] = (8));

} else {
var statearr_26019_26042 = state_26005__$1;
(statearr_26019_26042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (10))){
var inst_25997 = (state_26005[(2)]);
var state_26005__$1 = state_26005;
var statearr_26020_26043 = state_26005__$1;
(statearr_26020_26043[(2)] = inst_25997);

(statearr_26020_26043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26006 === (8))){
var inst_25982 = (state_26005[(7)]);
var tmp26017 = inst_25982;
var inst_25982__$1 = tmp26017;
var state_26005__$1 = (function (){var statearr_26021 = state_26005;
(statearr_26021[(7)] = inst_25982__$1);

return statearr_26021;
})();
var statearr_26022_26044 = state_26005__$1;
(statearr_26022_26044[(2)] = null);

(statearr_26022_26044[(1)] = (2));


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
});})(c__23405__auto___26034,out))
;
return ((function (switch__23293__auto__,c__23405__auto___26034,out){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_26026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26026[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_26026[(1)] = (1));

return statearr_26026;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_26005){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_26005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e26027){if((e26027 instanceof Object)){
var ex__23297__auto__ = e26027;
var statearr_26028_26045 = state_26005;
(statearr_26028_26045[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26046 = state_26005;
state_26005 = G__26046;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_26005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_26005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___26034,out))
})();
var state__23407__auto__ = (function (){var statearr_26029 = f__23406__auto__.call(null);
(statearr_26029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___26034);

return statearr_26029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___26034,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26047 = [];
var len__20407__auto___26117 = arguments.length;
var i__20408__auto___26118 = (0);
while(true){
if((i__20408__auto___26118 < len__20407__auto___26117)){
args26047.push((arguments[i__20408__auto___26118]));

var G__26119 = (i__20408__auto___26118 + (1));
i__20408__auto___26118 = G__26119;
continue;
} else {
}
break;
}

var G__26049 = args26047.length;
switch (G__26049) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26047.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23405__auto___26121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___26121,out){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___26121,out){
return (function (state_26087){
var state_val_26088 = (state_26087[(1)]);
if((state_val_26088 === (7))){
var inst_26083 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26089_26122 = state_26087__$1;
(statearr_26089_26122[(2)] = inst_26083);

(statearr_26089_26122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (1))){
var inst_26050 = (new Array(n));
var inst_26051 = inst_26050;
var inst_26052 = (0);
var state_26087__$1 = (function (){var statearr_26090 = state_26087;
(statearr_26090[(7)] = inst_26051);

(statearr_26090[(8)] = inst_26052);

return statearr_26090;
})();
var statearr_26091_26123 = state_26087__$1;
(statearr_26091_26123[(2)] = null);

(statearr_26091_26123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (4))){
var inst_26055 = (state_26087[(9)]);
var inst_26055__$1 = (state_26087[(2)]);
var inst_26056 = (inst_26055__$1 == null);
var inst_26057 = cljs.core.not.call(null,inst_26056);
var state_26087__$1 = (function (){var statearr_26092 = state_26087;
(statearr_26092[(9)] = inst_26055__$1);

return statearr_26092;
})();
if(inst_26057){
var statearr_26093_26124 = state_26087__$1;
(statearr_26093_26124[(1)] = (5));

} else {
var statearr_26094_26125 = state_26087__$1;
(statearr_26094_26125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (15))){
var inst_26077 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26095_26126 = state_26087__$1;
(statearr_26095_26126[(2)] = inst_26077);

(statearr_26095_26126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (13))){
var state_26087__$1 = state_26087;
var statearr_26096_26127 = state_26087__$1;
(statearr_26096_26127[(2)] = null);

(statearr_26096_26127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (6))){
var inst_26052 = (state_26087[(8)]);
var inst_26073 = (inst_26052 > (0));
var state_26087__$1 = state_26087;
if(cljs.core.truth_(inst_26073)){
var statearr_26097_26128 = state_26087__$1;
(statearr_26097_26128[(1)] = (12));

} else {
var statearr_26098_26129 = state_26087__$1;
(statearr_26098_26129[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (3))){
var inst_26085 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26087__$1,inst_26085);
} else {
if((state_val_26088 === (12))){
var inst_26051 = (state_26087[(7)]);
var inst_26075 = cljs.core.vec.call(null,inst_26051);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26087__$1,(15),out,inst_26075);
} else {
if((state_val_26088 === (2))){
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26087__$1,(4),ch);
} else {
if((state_val_26088 === (11))){
var inst_26067 = (state_26087[(2)]);
var inst_26068 = (new Array(n));
var inst_26051 = inst_26068;
var inst_26052 = (0);
var state_26087__$1 = (function (){var statearr_26099 = state_26087;
(statearr_26099[(7)] = inst_26051);

(statearr_26099[(10)] = inst_26067);

(statearr_26099[(8)] = inst_26052);

return statearr_26099;
})();
var statearr_26100_26130 = state_26087__$1;
(statearr_26100_26130[(2)] = null);

(statearr_26100_26130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (9))){
var inst_26051 = (state_26087[(7)]);
var inst_26065 = cljs.core.vec.call(null,inst_26051);
var state_26087__$1 = state_26087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26087__$1,(11),out,inst_26065);
} else {
if((state_val_26088 === (5))){
var inst_26051 = (state_26087[(7)]);
var inst_26060 = (state_26087[(11)]);
var inst_26052 = (state_26087[(8)]);
var inst_26055 = (state_26087[(9)]);
var inst_26059 = (inst_26051[inst_26052] = inst_26055);
var inst_26060__$1 = (inst_26052 + (1));
var inst_26061 = (inst_26060__$1 < n);
var state_26087__$1 = (function (){var statearr_26101 = state_26087;
(statearr_26101[(11)] = inst_26060__$1);

(statearr_26101[(12)] = inst_26059);

return statearr_26101;
})();
if(cljs.core.truth_(inst_26061)){
var statearr_26102_26131 = state_26087__$1;
(statearr_26102_26131[(1)] = (8));

} else {
var statearr_26103_26132 = state_26087__$1;
(statearr_26103_26132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (14))){
var inst_26080 = (state_26087[(2)]);
var inst_26081 = cljs.core.async.close_BANG_.call(null,out);
var state_26087__$1 = (function (){var statearr_26105 = state_26087;
(statearr_26105[(13)] = inst_26080);

return statearr_26105;
})();
var statearr_26106_26133 = state_26087__$1;
(statearr_26106_26133[(2)] = inst_26081);

(statearr_26106_26133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (10))){
var inst_26071 = (state_26087[(2)]);
var state_26087__$1 = state_26087;
var statearr_26107_26134 = state_26087__$1;
(statearr_26107_26134[(2)] = inst_26071);

(statearr_26107_26134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26088 === (8))){
var inst_26051 = (state_26087[(7)]);
var inst_26060 = (state_26087[(11)]);
var tmp26104 = inst_26051;
var inst_26051__$1 = tmp26104;
var inst_26052 = inst_26060;
var state_26087__$1 = (function (){var statearr_26108 = state_26087;
(statearr_26108[(7)] = inst_26051__$1);

(statearr_26108[(8)] = inst_26052);

return statearr_26108;
})();
var statearr_26109_26135 = state_26087__$1;
(statearr_26109_26135[(2)] = null);

(statearr_26109_26135[(1)] = (2));


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
});})(c__23405__auto___26121,out))
;
return ((function (switch__23293__auto__,c__23405__auto___26121,out){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_26113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26113[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_26113[(1)] = (1));

return statearr_26113;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_26087){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_26087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e26114){if((e26114 instanceof Object)){
var ex__23297__auto__ = e26114;
var statearr_26115_26136 = state_26087;
(statearr_26115_26136[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26137 = state_26087;
state_26087 = G__26137;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_26087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_26087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___26121,out))
})();
var state__23407__auto__ = (function (){var statearr_26116 = f__23406__auto__.call(null);
(statearr_26116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___26121);

return statearr_26116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___26121,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26138 = [];
var len__20407__auto___26212 = arguments.length;
var i__20408__auto___26213 = (0);
while(true){
if((i__20408__auto___26213 < len__20407__auto___26212)){
args26138.push((arguments[i__20408__auto___26213]));

var G__26214 = (i__20408__auto___26213 + (1));
i__20408__auto___26213 = G__26214;
continue;
} else {
}
break;
}

var G__26140 = args26138.length;
switch (G__26140) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args26138.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23405__auto___26216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23405__auto___26216,out){
return (function (){
var f__23406__auto__ = (function (){var switch__23293__auto__ = ((function (c__23405__auto___26216,out){
return (function (state_26182){
var state_val_26183 = (state_26182[(1)]);
if((state_val_26183 === (7))){
var inst_26178 = (state_26182[(2)]);
var state_26182__$1 = state_26182;
var statearr_26184_26217 = state_26182__$1;
(statearr_26184_26217[(2)] = inst_26178);

(statearr_26184_26217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (1))){
var inst_26141 = [];
var inst_26142 = inst_26141;
var inst_26143 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26182__$1 = (function (){var statearr_26185 = state_26182;
(statearr_26185[(7)] = inst_26142);

(statearr_26185[(8)] = inst_26143);

return statearr_26185;
})();
var statearr_26186_26218 = state_26182__$1;
(statearr_26186_26218[(2)] = null);

(statearr_26186_26218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (4))){
var inst_26146 = (state_26182[(9)]);
var inst_26146__$1 = (state_26182[(2)]);
var inst_26147 = (inst_26146__$1 == null);
var inst_26148 = cljs.core.not.call(null,inst_26147);
var state_26182__$1 = (function (){var statearr_26187 = state_26182;
(statearr_26187[(9)] = inst_26146__$1);

return statearr_26187;
})();
if(inst_26148){
var statearr_26188_26219 = state_26182__$1;
(statearr_26188_26219[(1)] = (5));

} else {
var statearr_26189_26220 = state_26182__$1;
(statearr_26189_26220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (15))){
var inst_26172 = (state_26182[(2)]);
var state_26182__$1 = state_26182;
var statearr_26190_26221 = state_26182__$1;
(statearr_26190_26221[(2)] = inst_26172);

(statearr_26190_26221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (13))){
var state_26182__$1 = state_26182;
var statearr_26191_26222 = state_26182__$1;
(statearr_26191_26222[(2)] = null);

(statearr_26191_26222[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (6))){
var inst_26142 = (state_26182[(7)]);
var inst_26167 = inst_26142.length;
var inst_26168 = (inst_26167 > (0));
var state_26182__$1 = state_26182;
if(cljs.core.truth_(inst_26168)){
var statearr_26192_26223 = state_26182__$1;
(statearr_26192_26223[(1)] = (12));

} else {
var statearr_26193_26224 = state_26182__$1;
(statearr_26193_26224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (3))){
var inst_26180 = (state_26182[(2)]);
var state_26182__$1 = state_26182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26182__$1,inst_26180);
} else {
if((state_val_26183 === (12))){
var inst_26142 = (state_26182[(7)]);
var inst_26170 = cljs.core.vec.call(null,inst_26142);
var state_26182__$1 = state_26182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26182__$1,(15),out,inst_26170);
} else {
if((state_val_26183 === (2))){
var state_26182__$1 = state_26182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26182__$1,(4),ch);
} else {
if((state_val_26183 === (11))){
var inst_26150 = (state_26182[(10)]);
var inst_26146 = (state_26182[(9)]);
var inst_26160 = (state_26182[(2)]);
var inst_26161 = [];
var inst_26162 = inst_26161.push(inst_26146);
var inst_26142 = inst_26161;
var inst_26143 = inst_26150;
var state_26182__$1 = (function (){var statearr_26194 = state_26182;
(statearr_26194[(7)] = inst_26142);

(statearr_26194[(11)] = inst_26162);

(statearr_26194[(12)] = inst_26160);

(statearr_26194[(8)] = inst_26143);

return statearr_26194;
})();
var statearr_26195_26225 = state_26182__$1;
(statearr_26195_26225[(2)] = null);

(statearr_26195_26225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (9))){
var inst_26142 = (state_26182[(7)]);
var inst_26158 = cljs.core.vec.call(null,inst_26142);
var state_26182__$1 = state_26182;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26182__$1,(11),out,inst_26158);
} else {
if((state_val_26183 === (5))){
var inst_26150 = (state_26182[(10)]);
var inst_26143 = (state_26182[(8)]);
var inst_26146 = (state_26182[(9)]);
var inst_26150__$1 = f.call(null,inst_26146);
var inst_26151 = cljs.core._EQ_.call(null,inst_26150__$1,inst_26143);
var inst_26152 = cljs.core.keyword_identical_QMARK_.call(null,inst_26143,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26153 = (inst_26151) || (inst_26152);
var state_26182__$1 = (function (){var statearr_26196 = state_26182;
(statearr_26196[(10)] = inst_26150__$1);

return statearr_26196;
})();
if(cljs.core.truth_(inst_26153)){
var statearr_26197_26226 = state_26182__$1;
(statearr_26197_26226[(1)] = (8));

} else {
var statearr_26198_26227 = state_26182__$1;
(statearr_26198_26227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (14))){
var inst_26175 = (state_26182[(2)]);
var inst_26176 = cljs.core.async.close_BANG_.call(null,out);
var state_26182__$1 = (function (){var statearr_26200 = state_26182;
(statearr_26200[(13)] = inst_26175);

return statearr_26200;
})();
var statearr_26201_26228 = state_26182__$1;
(statearr_26201_26228[(2)] = inst_26176);

(statearr_26201_26228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (10))){
var inst_26165 = (state_26182[(2)]);
var state_26182__$1 = state_26182;
var statearr_26202_26229 = state_26182__$1;
(statearr_26202_26229[(2)] = inst_26165);

(statearr_26202_26229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26183 === (8))){
var inst_26150 = (state_26182[(10)]);
var inst_26142 = (state_26182[(7)]);
var inst_26146 = (state_26182[(9)]);
var inst_26155 = inst_26142.push(inst_26146);
var tmp26199 = inst_26142;
var inst_26142__$1 = tmp26199;
var inst_26143 = inst_26150;
var state_26182__$1 = (function (){var statearr_26203 = state_26182;
(statearr_26203[(7)] = inst_26142__$1);

(statearr_26203[(8)] = inst_26143);

(statearr_26203[(14)] = inst_26155);

return statearr_26203;
})();
var statearr_26204_26230 = state_26182__$1;
(statearr_26204_26230[(2)] = null);

(statearr_26204_26230[(1)] = (2));


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
});})(c__23405__auto___26216,out))
;
return ((function (switch__23293__auto__,c__23405__auto___26216,out){
return (function() {
var cljs$core$async$state_machine__23294__auto__ = null;
var cljs$core$async$state_machine__23294__auto____0 = (function (){
var statearr_26208 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26208[(0)] = cljs$core$async$state_machine__23294__auto__);

(statearr_26208[(1)] = (1));

return statearr_26208;
});
var cljs$core$async$state_machine__23294__auto____1 = (function (state_26182){
while(true){
var ret_value__23295__auto__ = (function (){try{while(true){
var result__23296__auto__ = switch__23293__auto__.call(null,state_26182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23296__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23296__auto__;
}
break;
}
}catch (e26209){if((e26209 instanceof Object)){
var ex__23297__auto__ = e26209;
var statearr_26210_26231 = state_26182;
(statearr_26210_26231[(5)] = ex__23297__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26232 = state_26182;
state_26182 = G__26232;
continue;
} else {
return ret_value__23295__auto__;
}
break;
}
});
cljs$core$async$state_machine__23294__auto__ = function(state_26182){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23294__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23294__auto____1.call(this,state_26182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23294__auto____0;
cljs$core$async$state_machine__23294__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23294__auto____1;
return cljs$core$async$state_machine__23294__auto__;
})()
;})(switch__23293__auto__,c__23405__auto___26216,out))
})();
var state__23407__auto__ = (function (){var statearr_26211 = f__23406__auto__.call(null);
(statearr_26211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23405__auto___26216);

return statearr_26211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23407__auto__);
});})(c__23405__auto___26216,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map