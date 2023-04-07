// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('reagent_mui.styles');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('_CIRCA_mui.material.styles');
goog.require('reagent_mui.util');
reagent_mui.styles.global$module$_CIRCA_mui$material$styles = goog.global["MuiMaterialStyles"];
reagent_mui.styles.theme_provider_STAR_ = reagent_mui.util.adapt_react_class.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.ThemeProvider,"mui-theme-provider");
reagent_mui.styles.experimental_css_vars_provider_STAR_ = reagent_mui.util.adapt_react_class.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.Experimental_CssVarsProvider,"mui-experimental-css-vars-provider");
/**
 * The styled-components pattern. Takes a component and a styles-generating function or a styles object.
 * Creates and returns a new component and gives the input component a `:class-name` prop for applying styles.
 * Note: input component has to take all its props (including children) in a single map.
 */
reagent_mui.styles.styled = (function reagent_mui$styles$styled(var_args){
var G__4004 = arguments.length;
switch (G__4004) {
case 2:
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$2 = (function (component,styles){
return reagent_mui.styles.styled.call(null,component,cljs.core.PersistentArrayMap.EMPTY,styles);
}));

(reagent_mui.styles.styled.cljs$core$IFn$_invoke$arity$3 = (function (component,opts,styles){
var react_component = ((typeof component === 'string')?component:reagent_mui.util.reactify_component.call(null,component));
var styled_component = reagent_mui.styles.global$module$_CIRCA_mui$material$styles.styled(react_component,cljs.core.clj__GT_js.call(null,opts));
return reagent_mui.util.adapt_react_class.call(null,styled_component.call(null,reagent_mui.util.wrap_styles.call(null,styles)));
}));

(reagent_mui.styles.styled.cljs$lang$maxFixedArity = 3);

/**
 * Takes a theme object and enhances it with responsive font options
 * Options may optionally be passed in to override the defaults provided by Material-UI
 * See: https://mui.com/material-ui/customization/theming/#responsivefontsizes-theme-options-theme
 */
reagent_mui.styles.responsive_font_sizes = (function reagent_mui$styles$responsive_font_sizes(var_args){
var G__4007 = arguments.length;
switch (G__4007) {
case 1:
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$1 = (function (theme){
return reagent_mui.styles.responsive_font_sizes.call(null,theme,cljs.core.PersistentArrayMap.EMPTY);
}));

(reagent_mui.styles.responsive_font_sizes.cljs$core$IFn$_invoke$arity$2 = (function (theme,options){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.responsiveFontSizes(reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,theme),reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,options)));
}));

(reagent_mui.styles.responsive_font_sizes.cljs$lang$maxFixedArity = 2);

/**
 * React hook that returns the theme object.
 * Note: React hooks can't be used in regular Reagent components: https://cljdoc.org/d/reagent/reagent/1.0.0-alpha2/doc/tutorials/react-features#hooks
 */
reagent_mui.styles.use_theme = (function reagent_mui$styles$use_theme(){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.useTheme());
});
/**
 * Component that takes a theme object and makes it available in child components.
 * It should preferably be used at the root of your component tree.
 */
reagent_mui.styles.theme_provider = (function reagent_mui$styles$theme_provider(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4011 = arguments.length;
var i__5770__auto___4012 = (0);
while(true){
if((i__5770__auto___4012 < len__5769__auto___4011)){
args__5775__auto__.push((arguments[i__5770__auto___4012]));

var G__4013 = (i__5770__auto___4012 + (1));
i__5770__auto___4012 = G__4013;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent_mui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent_mui.styles.theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (theme,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.theme_provider_STAR_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme], null)], null),cljs.core.map.call(null,reagent.core.as_element,children));
}));

(reagent_mui.styles.theme_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.styles.theme_provider.cljs$lang$applyTo = (function (seq4009){
var G__4010 = cljs.core.first.call(null,seq4009);
var seq4009__$1 = cljs.core.next.call(null,seq4009);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4010,seq4009__$1);
}));

/**
 * Experimental provider for the theme to inject styles into Material UI components.
 * In addition to providing the theme in the inner React context,
 * this new provider also generates CSS variables out of all tokens in the theme
 * that are not functions, and makes them available in the context as well.
 * Currently only supported by the Button component.
 * See: https://mui.com/material-ui/experimental-api/css-variables/
 */
reagent_mui.styles.experimental_css_vars_provider = (function reagent_mui$styles$experimental_css_vars_provider(var_args){
var args__5775__auto__ = [];
var len__5769__auto___4016 = arguments.length;
var i__5770__auto___4017 = (0);
while(true){
if((i__5770__auto___4017 < len__5769__auto___4016)){
args__5775__auto__.push((arguments[i__5770__auto___4017]));

var G__4018 = (i__5770__auto___4017 + (1));
i__5770__auto___4017 = G__4018;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return reagent_mui.styles.experimental_css_vars_provider.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(reagent_mui.styles.experimental_css_vars_provider.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_mui.styles.experimental_css_vars_provider_STAR_,props], null),cljs.core.map.call(null,reagent.core.as_element,children));
}));

(reagent_mui.styles.experimental_css_vars_provider.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent_mui.styles.experimental_css_vars_provider.cljs$lang$applyTo = (function (seq4014){
var G__4015 = cljs.core.first.call(null,seq4014);
var seq4014__$1 = cljs.core.next.call(null,seq4014);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4015,seq4014__$1);
}));

/**
 * Hook that provides the current mode and setMode function for experimental-css-vars-provider.
 *   See: https://mui.com/material-ui/experimental-api/css-variables/
 */
reagent_mui.styles.use_color_scheme = (function reagent_mui$styles$use_color_scheme(){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.useColorScheme());
});
/**
 * Takes an incomplete theme object and adds the missing parts
 */
reagent_mui.styles.create_theme = (function reagent_mui$styles$create_theme(options){
return reagent_mui.util.js__GT_clj_SINGLEQUOTE_.call(null,reagent_mui.styles.global$module$_CIRCA_mui$material$styles.createTheme(reagent_mui.util.clj__GT_js_SINGLEQUOTE_.call(null,options)));
});

//# sourceMappingURL=styles.js.map
