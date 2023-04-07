// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.impl.util');
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.mount_count !== 'undefined')){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return (reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1)));
});
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = (((!(reagent.impl.util.is_client)))?reagent.impl.batching.fake_raf:(function (){var w = window;
return (function (){var or__5045__auto__ = w.requestAnimationFrame;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = w.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = w.mozRequestAnimationFrame;
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var or__5045__auto____$3 = w.msRequestAnimationFrame;
if(cljs.core.truth_(or__5045__auto____$3)){
return or__5045__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})().bind(w);
})());
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return (c1.cljsMountOrder - c2.cljsMountOrder);
});
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__5636__auto__ = a.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
var c_2241 = (a[i]);
if(c_2241.cljsIsDirty === true){
c_2241.forceUpdate();
} else {
}

var G__2242 = (i + (1));
i = G__2242;
continue;
} else {
return null;
}
break;
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
reagent.impl.batching.ratom_flush = (function reagent$impl$batching$ratom_flush(){
return null;
});
}
reagent.impl.batching.run_funs = (function reagent$impl$batching$run_funs(fs){
var n__5636__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__5636__auto__)){
(fs[i]).call(null);

var G__2243 = (i + (1));
i = G__2243;
continue;
} else {
return null;
}
break;
}
});
reagent.impl.batching.enqueue = (function reagent$impl$batching$enqueue(queue,fs,f){
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

fs.push(f);

return queue.schedule();
});

/**
* @constructor
 * @implements {reagent.impl.batching.Object}
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
var temp__5808__auto__ = this$.afterRender;
if((temp__5808__auto__ == null)){
return null;
} else {
var fs = temp__5808__auto__;
(this$.afterRender = null);

return reagent.impl.batching.run_funs.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
if((this$.componentQueue == null)){
(this$.componentQueue = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.componentQueue,c);
}));

(reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

return reagent.impl.batching.next_tick.call(null,(function (){
return this$.run_queues();
}));
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_before_flush = (function (){
var self__ = this;
var this$ = this;
var temp__5808__auto__ = this$.beforeFlush;
if((temp__5808__auto__ == null)){
return null;
} else {
var fs = temp__5808__auto__;
(this$.beforeFlush = null);

return reagent.impl.batching.run_funs.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.flush_before_flush();

reagent.impl.batching.ratom_flush.call(null);

this$.flush_render();

return this$.flush_after_render();
}));

(reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
if((this$.beforeFlush == null)){
(this$.beforeFlush = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.beforeFlush,f);
}));

(reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
if((this$.afterRender == null)){
(this$.afterRender = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.afterRender,f);
}));

(reagent.impl.batching.RenderQueue.prototype.flush_render = (function (){
var self__ = this;
var this$ = this;
var temp__5808__auto__ = this$.componentQueue;
if((temp__5808__auto__ == null)){
return null;
} else {
var fs = temp__5808__auto__;
(this$.componentQueue = null);

return reagent.impl.batching.run_queue.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue");

(reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for reagent.impl.batching/RenderQueue.
 */
reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.render_queue !== 'undefined')){
} else {
reagent.impl.batching.render_queue = reagent.impl.batching.__GT_RenderQueue.call(null,false);
}
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.flush_queues();
});
reagent.impl.batching.flush_after_render = (function reagent$impl$batching$flush_after_render(){
return reagent.impl.batching.render_queue.flush_after_render();
});
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
if(cljs.core.truth_(c.cljsIsDirty)){
return null;
} else {
(c.cljsIsDirty = true);

return reagent.impl.batching.render_queue.queue_render(c);
}
});
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c.cljsIsDirty = false);
});
reagent.impl.batching.do_before_flush = (function reagent$impl$batching$do_before_flush(f){
return reagent.impl.batching.render_queue.add_before_flush(f);
});
reagent.impl.batching.do_after_render = (function reagent$impl$batching$do_after_render(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.schedule = (function reagent$impl$batching$schedule(){
if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceMappingURL=batching.js.map
