// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10350__auto__,k__10351__auto__){
var self__ = this;
var this__10350__auto____$1 = this;
return this__10350__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10351__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10352__auto__,k12256,else__10353__auto__){
var self__ = this;
var this__10352__auto____$1 = this;
var G__12260 = k12256;
var G__12260__$1 = (((G__12260 instanceof cljs.core.Keyword))?G__12260.fqn:null);
switch (G__12260__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12256,else__10353__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__12261,opts){
var self__ = this;
var map__12262 = p__12261;
var map__12262__$1 = ((((!((map__12262 == null)))?((((map__12262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12262):map__12262);
var request__$1 = cljs.core.get.call(null,map__12262__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__12264 = this;
var map__12264__$1 = ((((!((map__12264 == null)))?((((map__12264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12264):map__12264);
var request__$2 = cljs.core.get.call(null,map__12264__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__12266,xhrio){
var self__ = this;
var map__12267 = p__12266;
var map__12267__$1 = ((((!((map__12267 == null)))?((((map__12267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12267):map__12267);
var response__$1 = cljs.core.get.call(null,map__12267__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__12269 = this;
var map__12269__$1 = ((((!((map__12269 == null)))?((((map__12269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12269):map__12269);
var response__$2 = cljs.core.get.call(null,map__12269__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10364__auto__,writer__10365__auto__,opts__10366__auto__){
var self__ = this;
var this__10364__auto____$1 = this;
var pr_pair__10367__auto__ = ((function (this__10364__auto____$1){
return (function (keyval__10368__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,cljs.core.pr_writer,""," ","",opts__10366__auto__,keyval__10368__auto__);
});})(this__10364__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,pr_pair__10367__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__10366__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12255){
var self__ = this;
var G__12255__$1 = this;
return (new cljs.core.RecordIter((0),G__12255__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10348__auto__){
var self__ = this;
var this__10348__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10345__auto__){
var self__ = this;
var this__10345__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10354__auto__){
var self__ = this;
var this__10354__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10346__auto__){
var self__ = this;
var this__10346__auto____$1 = this;
var h__10118__auto__ = self__.__hash;
if(!((h__10118__auto__ == null))){
return h__10118__auto__;
} else {
var h__10118__auto____$1 = ((function (h__10118__auto__,this__10346__auto____$1){
return (function (coll__10347__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__10347__auto__));
});})(h__10118__auto__,this__10346__auto____$1))
.call(null,this__10346__auto____$1);
self__.__hash = h__10118__auto____$1;

return h__10118__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12257,other12258){
var self__ = this;
var this12257__$1 = this;
return (!((other12258 == null))) && ((this12257__$1.constructor === other12258.constructor)) && (cljs.core._EQ_.call(null,this12257__$1.name,other12258.name)) && (cljs.core._EQ_.call(null,this12257__$1.request,other12258.request)) && (cljs.core._EQ_.call(null,this12257__$1.response,other12258.response)) && (cljs.core._EQ_.call(null,this12257__$1.__extmap,other12258.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10359__auto__,k__10360__auto__){
var self__ = this;
var this__10359__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__10360__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10359__auto____$1),self__.__meta),k__10360__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10360__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10357__auto__,k__10358__auto__,G__12255){
var self__ = this;
var this__10357__auto____$1 = this;
var pred__12271 = cljs.core.keyword_identical_QMARK_;
var expr__12272 = k__10358__auto__;
if(cljs.core.truth_(pred__12271.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__12272))){
return (new ajax.interceptors.StandardInterceptor(G__12255,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12271.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__12272))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__12255,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12271.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__12272))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__12255,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10358__auto__,G__12255),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10362__auto__){
var self__ = this;
var this__10362__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10349__auto__,G__12255){
var self__ = this;
var this__10349__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__12255,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10355__auto__,entry__10356__auto__){
var self__ = this;
var this__10355__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10356__auto__)){
return this__10355__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10356__auto__,(0)),cljs.core._nth.call(null,entry__10356__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10355__auto____$1,entry__10356__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__10388__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__10388__auto__,writer__10389__auto__){
return cljs.core._write.call(null,writer__10389__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__12259){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__12259),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__12259),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__12259),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12259,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m));
});
ajax.interceptors.success_QMARK_ = (function ajax$interceptors$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__12275,xhrio){
var map__12276 = p__12275;
var map__12276__$1 = ((((!((map__12276 == null)))?((((map__12276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12276):map__12276);
var description = cljs.core.get.call(null,map__12276__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message.call(null,e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body.call(null,xhrio));
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__10948__auto__ = [];
var len__10941__auto___12282 = arguments.length;
var i__10942__auto___12283 = (0);
while(true){
if((i__10942__auto___12283 < len__10941__auto___12282)){
args__10948__auto__.push((arguments[i__10942__auto___12283]));

var G__12284 = (i__10942__auto___12283 + (1));
i__10942__auto___12283 = G__12284;
continue;
} else {
}
break;
}

var argseq__10949__auto__ = ((((3) < args__10948__auto__.length))?(new cljs.core.IndexedSeq(args__10948__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10949__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq12278){
var G__12279 = cljs.core.first.call(null,seq12278);
var seq12278__$1 = cljs.core.next.call(null,seq12278);
var G__12280 = cljs.core.first.call(null,seq12278__$1);
var seq12278__$2 = cljs.core.next.call(null,seq12278__$1);
var G__12281 = cljs.core.first.call(null,seq12278__$2);
var seq12278__$3 = cljs.core.next.call(null,seq12278__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__12279,G__12280,G__12281,seq12278__$3);
});

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.call(null,", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10350__auto__,k__10351__auto__){
var self__ = this;
var this__10350__auto____$1 = this;
return this__10350__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10351__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10352__auto__,k12287,else__10353__auto__){
var self__ = this;
var this__10352__auto____$1 = this;
var G__12291 = k12287;
var G__12291__$1 = (((G__12291 instanceof cljs.core.Keyword))?G__12291.fqn:null);
switch (G__12291__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12287,else__10353__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__12292,request){
var self__ = this;
var map__12293 = p__12292;
var map__12293__$1 = ((((!((map__12293 == null)))?((((map__12293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12293.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12293):map__12293);
var content_type__$1 = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__12295 = this;
var map__12295__$1 = ((((!((map__12295 == null)))?((((map__12295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12295):map__12295);
var content_type__$2 = cljs.core.get.call(null,map__12295__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__12295,map__12295__$1,content_type__$2,map__12293,map__12293__$1,content_type__$1){
return (function (p1__12285_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__9662__auto__ = p1__12285_SHARP_;
if(cljs.core.truth_(or__9662__auto__)){
return or__9662__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__12295,map__12295__$1,content_type__$2,map__12293,map__12293__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__12297,xhrio){
var self__ = this;
var map__12298 = p__12297;
var map__12298__$1 = ((((!((map__12298 == null)))?((((map__12298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12298):map__12298);
var format = map__12298__$1;
var read__$1 = cljs.core.get.call(null,map__12298__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__12300 = this;
var map__12300__$1 = ((((!((map__12300 == null)))?((((map__12300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12300.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12300):map__12300);
var format__$1 = map__12300__$1;
var read__$2 = cljs.core.get.call(null,map__12300__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__12303 = status;
switch (G__12303) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
return fail.call(null,"Request failed.",new cljs.core.Keyword(null,"failed","failed",-1397425762));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read__$2.call(null,xhrio);
if(cljs.core.truth_(ajax.interceptors.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.protocols._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e12304){if((e12304 instanceof Object)){
var e = e12304;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e12304;

}
}
}
}catch (e12302){if((e12302 instanceof Object)){
var e = e12302;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e12302;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10364__auto__,writer__10365__auto__,opts__10366__auto__){
var self__ = this;
var this__10364__auto____$1 = this;
var pr_pair__10367__auto__ = ((function (this__10364__auto____$1){
return (function (keyval__10368__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,cljs.core.pr_writer,""," ","",opts__10366__auto__,keyval__10368__auto__);
});})(this__10364__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,pr_pair__10367__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__10366__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12286){
var self__ = this;
var G__12286__$1 = this;
return (new cljs.core.RecordIter((0),G__12286__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10348__auto__){
var self__ = this;
var this__10348__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10345__auto__){
var self__ = this;
var this__10345__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10354__auto__){
var self__ = this;
var this__10354__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10346__auto__){
var self__ = this;
var this__10346__auto____$1 = this;
var h__10118__auto__ = self__.__hash;
if(!((h__10118__auto__ == null))){
return h__10118__auto__;
} else {
var h__10118__auto____$1 = ((function (h__10118__auto__,this__10346__auto____$1){
return (function (coll__10347__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__10347__auto__));
});})(h__10118__auto__,this__10346__auto____$1))
.call(null,this__10346__auto____$1);
self__.__hash = h__10118__auto____$1;

return h__10118__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12288,other12289){
var self__ = this;
var this12288__$1 = this;
return (!((other12289 == null))) && ((this12288__$1.constructor === other12289.constructor)) && (cljs.core._EQ_.call(null,this12288__$1.read,other12289.read)) && (cljs.core._EQ_.call(null,this12288__$1.description,other12289.description)) && (cljs.core._EQ_.call(null,this12288__$1.content_type,other12289.content_type)) && (cljs.core._EQ_.call(null,this12288__$1.__extmap,other12289.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10359__auto__,k__10360__auto__){
var self__ = this;
var this__10359__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__10360__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10359__auto____$1),self__.__meta),k__10360__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10360__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10357__auto__,k__10358__auto__,G__12286){
var self__ = this;
var this__10357__auto____$1 = this;
var pred__12305 = cljs.core.keyword_identical_QMARK_;
var expr__12306 = k__10358__auto__;
if(cljs.core.truth_(pred__12305.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__12306))){
return (new ajax.interceptors.ResponseFormat(G__12286,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12305.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__12306))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__12286,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12305.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__12306))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__12286,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10358__auto__,G__12286),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10362__auto__){
var self__ = this;
var this__10362__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10349__auto__,G__12286){
var self__ = this;
var this__10349__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__12286,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10355__auto__,entry__10356__auto__){
var self__ = this;
var this__10355__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10356__auto__)){
return this__10355__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10356__auto__,(0)),cljs.core._nth.call(null,entry__10356__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10355__auto____$1,entry__10356__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__10388__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__10388__auto__,writer__10389__auto__){
return cljs.core._write.call(null,writer__10389__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__12290){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__12290),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__12290),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__12290),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12290,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return write.call(null,params);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10350__auto__,k__10351__auto__){
var self__ = this;
var this__10350__auto____$1 = this;
return this__10350__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10351__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10352__auto__,k12311,else__10353__auto__){
var self__ = this;
var this__10352__auto____$1 = this;
var G__12315 = k12311;
switch (G__12315) {
default:
return cljs.core.get.call(null,self__.__extmap,k12311,else__10353__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__12316){
var self__ = this;
var map__12317 = p__12316;
var map__12317__$1 = ((((!((map__12317 == null)))?((((map__12317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12317):map__12317);
var request = map__12317__$1;
var uri = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__12319 = ajax.interceptors.get_request_format.call(null,format);
var map__12319__$1 = ((((!((map__12319 == null)))?((((map__12319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12319):map__12319);
var write = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__9662__auto__ = headers;
if(cljs.core.truth_(or__9662__auto__)){
return or__9662__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.call(null,headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header.call(null,content_type)):headers__$1));
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10364__auto__,writer__10365__auto__,opts__10366__auto__){
var self__ = this;
var this__10364__auto____$1 = this;
var pr_pair__10367__auto__ = ((function (this__10364__auto____$1){
return (function (keyval__10368__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,cljs.core.pr_writer,""," ","",opts__10366__auto__,keyval__10368__auto__);
});})(this__10364__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,pr_pair__10367__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__10366__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12310){
var self__ = this;
var G__12310__$1 = this;
return (new cljs.core.RecordIter((0),G__12310__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10348__auto__){
var self__ = this;
var this__10348__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10345__auto__){
var self__ = this;
var this__10345__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10354__auto__){
var self__ = this;
var this__10354__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10346__auto__){
var self__ = this;
var this__10346__auto____$1 = this;
var h__10118__auto__ = self__.__hash;
if(!((h__10118__auto__ == null))){
return h__10118__auto__;
} else {
var h__10118__auto____$1 = ((function (h__10118__auto__,this__10346__auto____$1){
return (function (coll__10347__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__10347__auto__));
});})(h__10118__auto__,this__10346__auto____$1))
.call(null,this__10346__auto____$1);
self__.__hash = h__10118__auto____$1;

return h__10118__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12312,other12313){
var self__ = this;
var this12312__$1 = this;
return (!((other12313 == null))) && ((this12312__$1.constructor === other12313.constructor)) && (cljs.core._EQ_.call(null,this12312__$1.__extmap,other12313.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10359__auto__,k__10360__auto__){
var self__ = this;
var this__10359__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10360__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10359__auto____$1),self__.__meta),k__10360__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10360__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10357__auto__,k__10358__auto__,G__12310){
var self__ = this;
var this__10357__auto____$1 = this;
var pred__12321 = cljs.core.keyword_identical_QMARK_;
var expr__12322 = k__10358__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10358__auto__,G__12310),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10362__auto__){
var self__ = this;
var this__10362__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10349__auto__,G__12310){
var self__ = this;
var this__10349__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__12310,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10355__auto__,entry__10356__auto__){
var self__ = this;
var this__10355__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10356__auto__)){
return this__10355__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10356__auto__,(0)),cljs.core._nth.call(null,entry__10356__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10355__auto____$1,entry__10356__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__10388__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__10388__auto__,writer__10389__auto__){
return cljs.core._write.call(null,writer__10389__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__12314){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12314)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__12326 = arguments.length;
switch (G__12326) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__12327,uri){
var map__12328 = p__12327;
var map__12328__$1 = ((((!((map__12328 == null)))?((((map__12328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12328):map__12328);
var vec_strategy = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__12330){
var map__12331 = p__12330;
var map__12331__$1 = ((((!((map__12331 == null)))?((((map__12331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12331):map__12331);
var vec_strategy = cljs.core.get.call(null,map__12331__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__12331__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__12331,map__12331__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__12331,map__12331__$1,vec_strategy,params))
});

ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessGet = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10350__auto__,k__10351__auto__){
var self__ = this;
var this__10350__auto____$1 = this;
return this__10350__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10351__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10352__auto__,k12335,else__10353__auto__){
var self__ = this;
var this__10352__auto____$1 = this;
var G__12339 = k12335;
switch (G__12339) {
default:
return cljs.core.get.call(null,self__.__extmap,k12335,else__10353__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__12340){
var self__ = this;
var map__12341 = p__12340;
var map__12341__$1 = ((((!((map__12341 == null)))?((((map__12341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12341):map__12341);
var request = map__12341__$1;
var method = cljs.core.get.call(null,map__12341__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
if(cljs.core._EQ_.call(null,method,"GET")){
return cljs.core.reduced.call(null,cljs.core.update.call(null,request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.call(null,request)));
} else {
return request;
}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10364__auto__,writer__10365__auto__,opts__10366__auto__){
var self__ = this;
var this__10364__auto____$1 = this;
var pr_pair__10367__auto__ = ((function (this__10364__auto____$1){
return (function (keyval__10368__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,cljs.core.pr_writer,""," ","",opts__10366__auto__,keyval__10368__auto__);
});})(this__10364__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,pr_pair__10367__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__10366__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12334){
var self__ = this;
var G__12334__$1 = this;
return (new cljs.core.RecordIter((0),G__12334__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10348__auto__){
var self__ = this;
var this__10348__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10345__auto__){
var self__ = this;
var this__10345__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10354__auto__){
var self__ = this;
var this__10354__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10346__auto__){
var self__ = this;
var this__10346__auto____$1 = this;
var h__10118__auto__ = self__.__hash;
if(!((h__10118__auto__ == null))){
return h__10118__auto__;
} else {
var h__10118__auto____$1 = ((function (h__10118__auto__,this__10346__auto____$1){
return (function (coll__10347__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__10347__auto__));
});})(h__10118__auto__,this__10346__auto____$1))
.call(null,this__10346__auto____$1);
self__.__hash = h__10118__auto____$1;

return h__10118__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12336,other12337){
var self__ = this;
var this12336__$1 = this;
return (!((other12337 == null))) && ((this12336__$1.constructor === other12337.constructor)) && (cljs.core._EQ_.call(null,this12336__$1.__extmap,other12337.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10359__auto__,k__10360__auto__){
var self__ = this;
var this__10359__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10360__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10359__auto____$1),self__.__meta),k__10360__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10360__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10357__auto__,k__10358__auto__,G__12334){
var self__ = this;
var this__10357__auto____$1 = this;
var pred__12343 = cljs.core.keyword_identical_QMARK_;
var expr__12344 = k__10358__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10358__auto__,G__12334),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10362__auto__){
var self__ = this;
var this__10362__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10349__auto__,G__12334){
var self__ = this;
var this__10349__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__12334,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10355__auto__,entry__10356__auto__){
var self__ = this;
var this__10355__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10356__auto__)){
return this__10355__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10356__auto__,(0)),cljs.core._nth.call(null,entry__10356__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10355__auto____$1,entry__10356__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__10388__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__10388__auto__,writer__10389__auto__){
return cljs.core._write.call(null,writer__10389__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__12338){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12338)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__10350__auto__,k__10351__auto__){
var self__ = this;
var this__10350__auto____$1 = this;
return this__10350__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__10351__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__10352__auto__,k12348,else__10353__auto__){
var self__ = this;
var this__10352__auto____$1 = this;
var G__12352 = k12348;
switch (G__12352) {
default:
return cljs.core.get.call(null,self__.__extmap,k12348,else__10353__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__12353){
var self__ = this;
var map__12354 = p__12353;
var map__12354__$1 = ((((!((map__12354 == null)))?((((map__12354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12354):map__12354);
var request = map__12354__$1;
var body = cljs.core.get.call(null,map__12354__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced.call(null,request);
}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__10364__auto__,writer__10365__auto__,opts__10366__auto__){
var self__ = this;
var this__10364__auto____$1 = this;
var pr_pair__10367__auto__ = ((function (this__10364__auto____$1){
return (function (keyval__10368__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,cljs.core.pr_writer,""," ","",opts__10366__auto__,keyval__10368__auto__);
});})(this__10364__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__10365__auto__,pr_pair__10367__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__10366__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12347){
var self__ = this;
var G__12347__$1 = this;
return (new cljs.core.RecordIter((0),G__12347__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__10348__auto__){
var self__ = this;
var this__10348__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__10345__auto__){
var self__ = this;
var this__10345__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__10354__auto__){
var self__ = this;
var this__10354__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__10346__auto__){
var self__ = this;
var this__10346__auto____$1 = this;
var h__10118__auto__ = self__.__hash;
if(!((h__10118__auto__ == null))){
return h__10118__auto__;
} else {
var h__10118__auto____$1 = ((function (h__10118__auto__,this__10346__auto____$1){
return (function (coll__10347__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__10347__auto__));
});})(h__10118__auto__,this__10346__auto____$1))
.call(null,this__10346__auto____$1);
self__.__hash = h__10118__auto____$1;

return h__10118__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12349,other12350){
var self__ = this;
var this12349__$1 = this;
return (!((other12350 == null))) && ((this12349__$1.constructor === other12350.constructor)) && (cljs.core._EQ_.call(null,this12349__$1.__extmap,other12350.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__10359__auto__,k__10360__auto__){
var self__ = this;
var this__10359__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__10360__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__10359__auto____$1),self__.__meta),k__10360__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__10360__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__10357__auto__,k__10358__auto__,G__12347){
var self__ = this;
var this__10357__auto____$1 = this;
var pred__12356 = cljs.core.keyword_identical_QMARK_;
var expr__12357 = k__10358__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__10358__auto__,G__12347),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__10362__auto__){
var self__ = this;
var this__10362__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__10349__auto__,G__12347){
var self__ = this;
var this__10349__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__12347,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__10355__auto__,entry__10356__auto__){
var self__ = this;
var this__10355__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__10356__auto__)){
return this__10355__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__10356__auto__,(0)),cljs.core._nth.call(null,entry__10356__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__10355__auto____$1,entry__10356__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__10388__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__10388__auto__,writer__10389__auto__){
return cljs.core._write.call(null,writer__10389__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__12351){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12351)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__12360){
var map__12361 = p__12360;
var map__12361__$1 = ((((!((map__12361 == null)))?((((map__12361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12361):map__12361);
var opts = map__12361__$1;
var response_format = cljs.core.get.call(null,map__12361__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.truth_(ajax.interceptors.is_response_format_QMARK_.call(null,response_format))){
return response_format;
} else {
if(cljs.core.vector_QMARK_.call(null,response_format)){
return interpret_vector.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return ajax.interceptors.map__GT_ResponseFormat.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=interceptors.js.map
