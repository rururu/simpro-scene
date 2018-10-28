// Compiled by ClojureScript 1.9.946 {}
goog.provide('geo.calc');
goog.require('cljs.core');
geo.calc.radians = (function geo$calc$radians(deg){
return ((deg * Math.PI) / (180));
});
geo.calc.degrees = (function geo$calc$degrees(rad){
return ((rad * (180)) / Math.PI);
});
geo.calc.spherical_between_js = (function geo$calc$spherical_between_js(phi1,lambda0,c,az){
var cosphi1 = Math.cos(phi1);
var sinphi1 = Math.sin(phi1);
var cosaz = Math.cos(az);
var sinaz = Math.sin(az);
var sinc = Math.sin(c);
var cosc = Math.cos(c);
var phi2 = Math.asin(((sinphi1 * cosc) + ((cosphi1 * sinc) * cosaz)));
var lam2 = (Math.atan2((sinc * sinaz),((cosphi1 * cosc) - ((sinphi1 * sinc) * cosaz))) + lambda0);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi2,lam2], null);
});
geo.calc.future_pos_js = (function geo$calc$future_pos_js(p__27183,crs,spd,tim){
var vec__27184 = p__27183;
var lat = cljs.core.nth.call(null,vec__27184,(0),null);
var lon = cljs.core.nth.call(null,vec__27184,(1),null);
var phi = geo.calc.radians.call(null,lat);
var lam = geo.calc.radians.call(null,lon);
var dir = geo.calc.radians.call(null,crs);
var way = (spd * tim);
var way__$1 = geo.calc.radians.call(null,(way / (60)));
var vec__27187 = geo.calc.spherical_between_js.call(null,phi,lam,way__$1,dir);
var phi2 = cljs.core.nth.call(null,vec__27187,(0),null);
var lam2 = cljs.core.nth.call(null,vec__27187,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [geo.calc.degrees.call(null,phi2),geo.calc.degrees.call(null,lam2)], null);
});
geo.calc.norm_crs = (function geo$calc$norm_crs(x){
if((x > (360))){
return (x - (360));
} else {
if((x < (0))){
return (x + (360));
} else {
return x;

}
}
});

//# sourceMappingURL=calc.js.map
