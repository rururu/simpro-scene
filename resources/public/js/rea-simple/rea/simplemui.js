// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('rea.simplemui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('reagent_mui.material.css_baseline');
goog.require('reagent_mui.colors');
goog.require('reagent_mui.styles');
goog.require('reagent_mui.material.text_field');
rea.simplemui.CUSTOM_TEME = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),reagent_mui.colors.purple,new cljs.core.Keyword(null,"secondary","secondary",-669381460),reagent_mui.colors.green], null)], null);
rea.simplemui.CLASSES = (function (){var prefix = "rmui-example";
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"root","root",-448657453),[prefix,"-root"].join(''),new cljs.core.Keyword(null,"text-field","text-field",1955422445),[prefix,"-text-field"].join('')], null);
})();
rea.simplemui.TEXT_STATE = (((typeof rea !== 'undefined') && (typeof rea.simplemui !== 'undefined') && (typeof rea.simplemui.text_state !== 'undefined'))?null:rea.simplemui.text_state = reagent.core.atom.call(null,"foobar"));
rea.simplemui.greeting = (function rea$simplemui$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
rea.simplemui.event_value = (function rea$simplemui$event_value(e){
return e.target.value;
});
rea.simplemui.main = (function rea$simplemui$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rea.simplemui.greeting,"\u0422\u043E\u0447\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.material.text_field.text_field,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,rea.simplemui.text_state),new cljs.core.Keyword(null,"label","label",1718410804),"Text input",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),"Helper text",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text-field","text-field",1955422445).cljs$core$IFn$_invoke$arity$1(rea.simplemui.CLASSES),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.reset_BANG_.call(null,rea.simplemui.text_state,rea.simplemui.event_value.call(null,e));
})], null)], null)], null);
});
rea.simplemui.run = (function rea$simplemui$run(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rea.simplemui.main], null),document.getElementById("app"));
});

//# sourceMappingURL=simplemui.js.map
