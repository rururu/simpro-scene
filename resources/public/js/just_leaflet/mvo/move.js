// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('mvo.move');
goog.require('cljs.core');
mvo.move.PID180 = (Math.PI / (180));
mvo.move.NMRAD = (Math.PI / (10800));
mvo.move.TIMEOUT_HRS = (0);
mvo.move.TIME_RUN = false;
mvo.move.spherical_between_js = (function mvo$move$spherical_between_js(phi1,lambda0,c,az){
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
mvo.move.spherical_azimuth_js = (function mvo$move$spherical_azimuth_js(phi1,lambda0,phi,lambda){
var ldiff = (lambda - lambda0);
var cosphi = Math.cos(phi);
return Math.atan2((cosphi * js.Math.sin(ldiff)),((Math.cos(phi1) * Math.sin(phi)) - ((Math.sin(phi1) * cosphi) * Math.cos(ldiff))));
});
mvo.move.bear_deg_js = (function mvo$move$bear_deg_js(p__20790,p__20791){
var vec__20792 = p__20790;
var la1 = cljs.core.nth.call(null,vec__20792,(0),null);
var lo1 = cljs.core.nth.call(null,vec__20792,(1),null);
var vec__20795 = p__20791;
var la2 = cljs.core.nth.call(null,vec__20795,(0),null);
var lo2 = cljs.core.nth.call(null,vec__20795,(1),null);
var fi1 = (la1 * mvo.move.PID180);
var ld1 = (lo1 * mvo.move.PID180);
var fi2 = (la2 * mvo.move.PID180);
var ld2 = (lo2 * mvo.move.PID180);
var rad = mvo.move.spherical_azimuth_js.call(null,fi1,ld1,fi2,ld2);
var deg = (rad / mvo.move.PID180);
if((deg < (0))){
return (deg + 360.0);
} else {
if((deg > 360.0)){
return (deg - 360.0);
} else {
return deg;

}
}
});
mvo.move.set_turn_point = (function mvo$move$set_turn_point(mvo__$1,p__20798,crs,spd){
var vec__20799 = p__20798;
var lat = cljs.core.nth.call(null,vec__20799,(0),null);
var lon = cljs.core.nth.call(null,vec__20799,(1),null);
return cljs.core._vreset_BANG_.call(null,mvo__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,mvo__$1),new cljs.core.Keyword(null,"phi-tur","phi-tur",-1775762032),(lat * mvo.move.PID180),new cljs.core.Keyword(null,"lam-tur","lam-tur",-1285200490),(lon * mvo.move.PID180),new cljs.core.Keyword(null,"dir","dir",1734754661),(crs * mvo.move.PID180),new cljs.core.Keyword(null,"rdh","rdh",1247569967),(spd * mvo.move.NMRAD),new cljs.core.Keyword(null,"elt-tur","elt-tur",-1114335595),0.0));
});
mvo.move.get_coord = (function mvo$move$get_coord(mv){
var ll = mv.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).getLatLng();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ll.lat,ll.lng], null);
});
mvo.move.get_course = (function mvo$move$get_course(mv){
return (mv.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661)) / mvo.move.PID180);
});
mvo.move.get_speed = (function mvo$move$get_speed(mv){
return (mv.call(null,new cljs.core.Keyword(null,"rdh","rdh",1247569967)) / mvo.move.NMRAD);
});
mvo.move.set_course = (function mvo$move$set_course(mvo__$1,crs){
var mv = cljs.core.deref.call(null,mvo__$1);
mvo.move.set_turn_point.call(null,mvo__$1,mvo.move.get_coord.call(null,mv),crs,mvo.move.get_speed.call(null,mv));

return mv.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).setRotationAngle(crs);
});
mvo.move.set_speed = (function mvo$move$set_speed(mvo__$1,spd){
var mv = cljs.core.deref.call(null,mvo__$1);
return mvo.move.set_turn_point.call(null,mvo__$1,mvo.move.get_coord.call(null,mv),mvo.move.get_course.call(null,mv),spd);
});
mvo.move.set_coord = (function mvo$move$set_coord(mvo__$1,crd){
var mv = cljs.core.deref.call(null,mvo__$1);
var vec__20802 = crd;
var lat = cljs.core.nth.call(null,vec__20802,(0),null);
var lon = cljs.core.nth.call(null,vec__20802,(1),null);
mvo.move.set_turn_point.call(null,mvo__$1,crd,mvo.move.get_course.call(null,mv),mvo.move.get_speed.call(null,mv));

return mv.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).setLatLng((new L.LatLng(lat,lon)));
});
mvo.move.create_mover = (function mvo$move$create_mover(crd,crs,spd,mrk){
var mvo__$1 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"marker","marker",865118313),mrk], null));
mvo.move.set_turn_point.call(null,mvo__$1,crd,crs,spd);

return mvo__$1;
});
mvo.move.tow = (function mvo$move$tow(p__20805,phi,lam,crs){
var vec__20806 = p__20805;
var cmk = cljs.core.nth.call(null,vec__20806,(0),null);
var vec__20809 = cljs.core.nth.call(null,vec__20806,(1),null);
var rd = cljs.core.nth.call(null,vec__20809,(0),null);
var az = cljs.core.nth.call(null,vec__20809,(1),null);
var vec__20812 = mvo.move.spherical_between_js.call(null,phi,lam,rd,az);
var phi2 = cljs.core.nth.call(null,vec__20812,(0),null);
var lam2 = cljs.core.nth.call(null,vec__20812,(1),null);
var pos2 = (new L.LatLng((phi2 / mvo.move.PID180),(lam2 / mvo.move.PID180)));
cmk.setLatLng(pos2);

if((cmk instanceof L.Marker)){
return cmk.setRotationAngle(crs);
} else {
return null;
}
});
mvo.move.move = (function mvo$move$move(mvo__$1){
if(mvo.move.TIME_RUN){
var mv = cljs.core.deref.call(null,mvo__$1);
var elt = (mv.call(null,new cljs.core.Keyword(null,"elt-tur","elt-tur",-1114335595)) + mvo.move.TIMEOUT_HRS);
var way = (mv.call(null,new cljs.core.Keyword(null,"rdh","rdh",1247569967)) * elt);
var vec__20815 = mvo.move.spherical_between_js.call(null,mv.call(null,new cljs.core.Keyword(null,"phi-tur","phi-tur",-1775762032)),mv.call(null,new cljs.core.Keyword(null,"lam-tur","lam-tur",-1285200490)),way,mv.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661)));
var phi = cljs.core.nth.call(null,vec__20815,(0),null);
var lam = cljs.core.nth.call(null,vec__20815,(1),null);
var pos = (new L.LatLng((phi / mvo.move.PID180),(lam / mvo.move.PID180)));
mv.call(null,new cljs.core.Keyword(null,"marker","marker",865118313)).setLatLng(pos);

var seq__20818_20822 = cljs.core.seq.call(null,mv.call(null,new cljs.core.Keyword(null,"tows","tows",-857998397)));
var chunk__20819_20823 = null;
var count__20820_20824 = (0);
var i__20821_20825 = (0);
while(true){
if((i__20821_20825 < count__20820_20824)){
var twd_20826 = cljs.core._nth.call(null,chunk__20819_20823,i__20821_20825);
mvo.move.tow.call(null,twd_20826,phi,lam,mvo.move.get_course.call(null,mv));


var G__20827 = seq__20818_20822;
var G__20828 = chunk__20819_20823;
var G__20829 = count__20820_20824;
var G__20830 = (i__20821_20825 + (1));
seq__20818_20822 = G__20827;
chunk__20819_20823 = G__20828;
count__20820_20824 = G__20829;
i__20821_20825 = G__20830;
continue;
} else {
var temp__5804__auto___20831 = cljs.core.seq.call(null,seq__20818_20822);
if(temp__5804__auto___20831){
var seq__20818_20832__$1 = temp__5804__auto___20831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20818_20832__$1)){
var c__5568__auto___20833 = cljs.core.chunk_first.call(null,seq__20818_20832__$1);
var G__20834 = cljs.core.chunk_rest.call(null,seq__20818_20832__$1);
var G__20835 = c__5568__auto___20833;
var G__20836 = cljs.core.count.call(null,c__5568__auto___20833);
var G__20837 = (0);
seq__20818_20822 = G__20834;
chunk__20819_20823 = G__20835;
count__20820_20824 = G__20836;
i__20821_20825 = G__20837;
continue;
} else {
var twd_20838 = cljs.core.first.call(null,seq__20818_20832__$1);
mvo.move.tow.call(null,twd_20838,phi,lam,mvo.move.get_course.call(null,mv));


var G__20839 = cljs.core.next.call(null,seq__20818_20832__$1);
var G__20840 = null;
var G__20841 = (0);
var G__20842 = (0);
seq__20818_20822 = G__20839;
chunk__20819_20823 = G__20840;
count__20820_20824 = G__20841;
i__20821_20825 = G__20842;
continue;
}
} else {
}
}
break;
}

return cljs.core._vreset_BANG_.call(null,mvo__$1,cljs.core.assoc.call(null,cljs.core._deref.call(null,mvo__$1),new cljs.core.Keyword(null,"elt-tur","elt-tur",-1114335595),elt));
} else {
return null;
}
});
mvo.move.set_time_run = (function mvo$move$set_time_run(bool){
return (
mvo.move.TIME_RUN = bool)
;
});
mvo.move.set_timeout_hrs = (function mvo$move$set_timeout_hrs(timeout_mcec,time_scale){
return (
mvo.move.TIMEOUT_HRS = ((timeout_mcec / (3600000)) * time_scale))
;
});

//# sourceMappingURL=move.js.map
