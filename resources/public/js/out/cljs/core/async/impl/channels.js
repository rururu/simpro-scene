// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927 = (function (val,meta20928){
this.val = val;
this.meta20928 = meta20928;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20929,meta20928__$1){
var self__ = this;
var _20929__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927(self__.val,meta20928__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20929){
var self__ = this;
var _20929__$1 = this;
return self__.meta20928;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta20928","meta20928",-1018950134,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels20927";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels20927");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels20927 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels20927(val__$1,meta20928){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927(val__$1,meta20928));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels20927(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__18805__auto__ = (((this$ == null))?null:this$);
var m__18806__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__18805__auto__)]);
if(!((m__18806__auto__ == null))){
return m__18806__auto__.call(null,this$);
} else {
var m__18806__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__18806__auto____$1 == null))){
return m__18806__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_20941 = self__.puts.pop();
if((putter_20941 == null)){
} else {
var put_handler_20942 = putter_20941.handler;
var val_20943 = putter_20941.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_20942)){
var put_cb_20944 = cljs.core.async.impl.protocols.commit.call(null,put_handler_20942);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_20944,put_handler_20942,val_20943,putter_20941,this$__$1){
return (function (){
return put_cb_20944.call(null,true);
});})(put_cb_20944,put_handler_20942,val_20943,putter_20941,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__18060__auto__ = self__.buf;
if(cljs.core.truth_(and__18060__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__18060__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__20945 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__20945;
continue;
} else {
var G__20946 = takers;
takers = G__20946;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__20930_20947 = cljs.core.seq.call(null,take_cbs);
var chunk__20931_20948 = null;
var count__20932_20949 = (0);
var i__20933_20950 = (0);
while(true){
if((i__20933_20950 < count__20932_20949)){
var f_20951 = cljs.core._nth.call(null,chunk__20931_20948,i__20933_20950);
cljs.core.async.impl.dispatch.run.call(null,f_20951);

var G__20952 = seq__20930_20947;
var G__20953 = chunk__20931_20948;
var G__20954 = count__20932_20949;
var G__20955 = (i__20933_20950 + (1));
seq__20930_20947 = G__20952;
chunk__20931_20948 = G__20953;
count__20932_20949 = G__20954;
i__20933_20950 = G__20955;
continue;
} else {
var temp__5457__auto___20956 = cljs.core.seq.call(null,seq__20930_20947);
if(temp__5457__auto___20956){
var seq__20930_20957__$1 = temp__5457__auto___20956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20930_20957__$1)){
var c__19003__auto___20958 = cljs.core.chunk_first.call(null,seq__20930_20957__$1);
var G__20959 = cljs.core.chunk_rest.call(null,seq__20930_20957__$1);
var G__20960 = c__19003__auto___20958;
var G__20961 = cljs.core.count.call(null,c__19003__auto___20958);
var G__20962 = (0);
seq__20930_20947 = G__20959;
chunk__20931_20948 = G__20960;
count__20932_20949 = G__20961;
i__20933_20950 = G__20962;
continue;
} else {
var f_20963 = cljs.core.first.call(null,seq__20930_20957__$1);
cljs.core.async.impl.dispatch.run.call(null,f_20963);

var G__20964 = cljs.core.next.call(null,seq__20930_20957__$1);
var G__20965 = null;
var G__20966 = (0);
var G__20967 = (0);
seq__20930_20947 = G__20964;
chunk__20931_20948 = G__20965;
count__20932_20949 = G__20966;
i__20933_20950 = G__20967;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__20934 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__18060__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__18060__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__18060__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__20968 = cbs__$1;
cbs = G__20968;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__20934,(0),null);
var cbs = cljs.core.nth.call(null,vec__20934,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__20937_20969 = cljs.core.seq.call(null,cbs);
var chunk__20938_20970 = null;
var count__20939_20971 = (0);
var i__20940_20972 = (0);
while(true){
if((i__20940_20972 < count__20939_20971)){
var cb_20973 = cljs.core._nth.call(null,chunk__20938_20970,i__20940_20972);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__20937_20969,chunk__20938_20970,count__20939_20971,i__20940_20972,cb_20973,val,vec__20934,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_20973.call(null,true);
});})(seq__20937_20969,chunk__20938_20970,count__20939_20971,i__20940_20972,cb_20973,val,vec__20934,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__20974 = seq__20937_20969;
var G__20975 = chunk__20938_20970;
var G__20976 = count__20939_20971;
var G__20977 = (i__20940_20972 + (1));
seq__20937_20969 = G__20974;
chunk__20938_20970 = G__20975;
count__20939_20971 = G__20976;
i__20940_20972 = G__20977;
continue;
} else {
var temp__5457__auto___20978 = cljs.core.seq.call(null,seq__20937_20969);
if(temp__5457__auto___20978){
var seq__20937_20979__$1 = temp__5457__auto___20978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20937_20979__$1)){
var c__19003__auto___20980 = cljs.core.chunk_first.call(null,seq__20937_20979__$1);
var G__20981 = cljs.core.chunk_rest.call(null,seq__20937_20979__$1);
var G__20982 = c__19003__auto___20980;
var G__20983 = cljs.core.count.call(null,c__19003__auto___20980);
var G__20984 = (0);
seq__20937_20969 = G__20981;
chunk__20938_20970 = G__20982;
count__20939_20971 = G__20983;
i__20940_20972 = G__20984;
continue;
} else {
var cb_20985 = cljs.core.first.call(null,seq__20937_20979__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__20937_20969,chunk__20938_20970,count__20939_20971,i__20940_20972,cb_20985,seq__20937_20979__$1,temp__5457__auto___20978,val,vec__20934,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_20985.call(null,true);
});})(seq__20937_20969,chunk__20938_20970,count__20939_20971,i__20940_20972,cb_20985,seq__20937_20979__$1,temp__5457__auto___20978,val,vec__20934,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__20986 = cljs.core.next.call(null,seq__20937_20979__$1);
var G__20987 = null;
var G__20988 = (0);
var G__20989 = (0);
seq__20937_20969 = G__20986;
chunk__20938_20970 = G__20987;
count__20939_20971 = G__20988;
i__20940_20972 = G__20989;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__18060__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__18060__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__18060__auto__;
}
})())){
var has_val = (function (){var and__18060__auto__ = self__.buf;
if(cljs.core.truth_(and__18060__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__18060__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__18060__auto__ = self__.buf;
if(cljs.core.truth_(and__18060__auto__)){
return (self__.puts.length === (0));
} else {
return and__18060__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_20990 = self__.takes.pop();
if((taker_20990 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_20990)){
var take_cb_20991 = cljs.core.async.impl.protocols.commit.call(null,taker_20990);
var val_20992 = (cljs.core.truth_((function (){var and__18060__auto__ = self__.buf;
if(cljs.core.truth_(and__18060__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__18060__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_20991,val_20992,taker_20990,this$__$1){
return (function (){
return take_cb_20991.call(null,val_20992);
});})(take_cb_20991,val_20992,taker_20990,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__18743__auto__,writer__18744__auto__,opt__18745__auto__){
return cljs.core._write.call(null,writer__18744__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__18072__auto__ = exh;
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__20994 = arguments.length;
switch (G__20994) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__20998 = null;
var G__20998__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e20995){var t = e20995;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__20998__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e20996){var t = e20996;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__20998 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__20998__1.call(this,buf__$1);
case 2:
return G__20998__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__20998.cljs$core$IFn$_invoke$arity$1 = G__20998__1;
G__20998.cljs$core$IFn$_invoke$arity$2 = G__20998__2;
return G__20998;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map
