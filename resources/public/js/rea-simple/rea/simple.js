// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rea.simple');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('clojure.string');
rea.simple.TIMER = (((typeof rea !== 'undefined') && (typeof rea.simple !== 'undefined') && (typeof rea.simple.timer !== 'undefined'))?null:rea.simple.timer = reagent.core.atom.call(null,(new Date())));
rea.simple.TIME_COLOR = (((typeof rea !== 'undefined') && (typeof rea.simple !== 'undefined') && (typeof rea.simple.time_color !== 'undefined'))?null:rea.simple.time_color = reagent.core.atom.call(null,"#080"));
rea.simple.TIME_UPDATER = (((typeof rea !== 'undefined') && (typeof rea.simple !== 'undefined') && (typeof rea.simple.time_updater !== 'undefined'))?null:rea.simple.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,rea.simple.timer,(new Date()));
}),(1000)));
rea.simple.greeting = (function rea$simple$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
rea.simple.clock = (function rea$simple$clock(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,rea.simple.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,rea.simple.time_color)], null)], null),time_str], null);
});
rea.simple.color_input = (function rea$simple$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Digits color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rea.simple.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__10335_SHARP_){
return cljs.core.reset_BANG_.call(null,rea.simple.time_color,p1__10335_SHARP_.target.value);
})], null)], null)], null);
});
rea.simple.simple_example = (function rea$simple$simple_example(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rea.simple.greeting,"\u0422\u043E\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rea.simple.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rea.simple.color_input], null)], null);
});
rea.simple.run = (function rea$simple$run(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rea.simple.simple_example], null),document.getElementById("app"));
});

//# sourceMappingURL=simple.js.map
