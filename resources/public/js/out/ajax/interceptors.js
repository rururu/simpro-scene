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
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18760__auto__,k__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
return this__18760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18761__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18762__auto__,k20577,else__18763__auto__){
var self__ = this;
var this__18762__auto____$1 = this;
var G__20581 = k20577;
var G__20581__$1 = (((G__20581 instanceof cljs.core.Keyword))?G__20581.fqn:null);
switch (G__20581__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k20577,else__18763__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__20582,opts){
var self__ = this;
var map__20583 = p__20582;
var map__20583__$1 = ((((!((map__20583 == null)))?((((map__20583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20583):map__20583);
var request__$1 = cljs.core.get.call(null,map__20583__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__20585 = this;
var map__20585__$1 = ((((!((map__20585 == null)))?((((map__20585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20585.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20585):map__20585);
var request__$2 = cljs.core.get.call(null,map__20585__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__20587,xhrio){
var self__ = this;
var map__20588 = p__20587;
var map__20588__$1 = ((((!((map__20588 == null)))?((((map__20588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20588.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20588):map__20588);
var response__$1 = cljs.core.get.call(null,map__20588__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__20590 = this;
var map__20590__$1 = ((((!((map__20590 == null)))?((((map__20590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20590):map__20590);
var response__$2 = cljs.core.get.call(null,map__20590__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18774__auto__,writer__18775__auto__,opts__18776__auto__){
var self__ = this;
var this__18774__auto____$1 = this;
var pr_pair__18777__auto__ = ((function (this__18774__auto____$1){
return (function (keyval__18778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,cljs.core.pr_writer,""," ","",opts__18776__auto__,keyval__18778__auto__);
});})(this__18774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,pr_pair__18777__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__18776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20576){
var self__ = this;
var G__20576__$1 = this;
return (new cljs.core.RecordIter((0),G__20576__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18758__auto__){
var self__ = this;
var this__18758__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18755__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18764__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18756__auto__){
var self__ = this;
var this__18756__auto____$1 = this;
var h__18528__auto__ = self__.__hash;
if(!((h__18528__auto__ == null))){
return h__18528__auto__;
} else {
var h__18528__auto____$1 = ((function (h__18528__auto__,this__18756__auto____$1){
return (function (coll__18757__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__18757__auto__));
});})(h__18528__auto__,this__18756__auto____$1))
.call(null,this__18756__auto____$1);
self__.__hash = h__18528__auto____$1;

return h__18528__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20578,other20579){
var self__ = this;
var this20578__$1 = this;
return (!((other20579 == null))) && ((this20578__$1.constructor === other20579.constructor)) && (cljs.core._EQ_.call(null,this20578__$1.name,other20579.name)) && (cljs.core._EQ_.call(null,this20578__$1.request,other20579.request)) && (cljs.core._EQ_.call(null,this20578__$1.response,other20579.response)) && (cljs.core._EQ_.call(null,this20578__$1.__extmap,other20579.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18769__auto__,k__18770__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__18770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18769__auto____$1),self__.__meta),k__18770__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18770__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18767__auto__,k__18768__auto__,G__20576){
var self__ = this;
var this__18767__auto____$1 = this;
var pred__20592 = cljs.core.keyword_identical_QMARK_;
var expr__20593 = k__18768__auto__;
if(cljs.core.truth_(pred__20592.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__20593))){
return (new ajax.interceptors.StandardInterceptor(G__20576,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20592.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__20593))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__20576,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20592.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__20593))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__20576,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18768__auto__,G__20576),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18772__auto__){
var self__ = this;
var this__18772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18759__auto__,G__20576){
var self__ = this;
var this__18759__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__20576,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18765__auto__,entry__18766__auto__){
var self__ = this;
var this__18765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18766__auto__)){
return this__18765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18766__auto__,(0)),cljs.core._nth.call(null,entry__18766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18765__auto____$1,entry__18766__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__18798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__18798__auto__,writer__18799__auto__){
return cljs.core._write.call(null,writer__18799__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__20580){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__20580),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__20580),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__20580),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__20580,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
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
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__20596,xhrio){
var map__20597 = p__20596;
var map__20597__$1 = ((((!((map__20597 == null)))?((((map__20597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20597.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20597):map__20597);
var description = cljs.core.get.call(null,map__20597__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__19358__auto__ = [];
var len__19351__auto___20603 = arguments.length;
var i__19352__auto___20604 = (0);
while(true){
if((i__19352__auto___20604 < len__19351__auto___20603)){
args__19358__auto__.push((arguments[i__19352__auto___20604]));

var G__20605 = (i__19352__auto___20604 + (1));
i__19352__auto___20604 = G__20605;
continue;
} else {
}
break;
}

var argseq__19359__auto__ = ((((3) < args__19358__auto__.length))?(new cljs.core.IndexedSeq(args__19358__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19359__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq20599){
var G__20600 = cljs.core.first.call(null,seq20599);
var seq20599__$1 = cljs.core.next.call(null,seq20599);
var G__20601 = cljs.core.first.call(null,seq20599__$1);
var seq20599__$2 = cljs.core.next.call(null,seq20599__$1);
var G__20602 = cljs.core.first.call(null,seq20599__$2);
var seq20599__$3 = cljs.core.next.call(null,seq20599__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__20600,G__20601,G__20602,seq20599__$3);
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
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18760__auto__,k__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
return this__18760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18761__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18762__auto__,k20608,else__18763__auto__){
var self__ = this;
var this__18762__auto____$1 = this;
var G__20612 = k20608;
var G__20612__$1 = (((G__20612 instanceof cljs.core.Keyword))?G__20612.fqn:null);
switch (G__20612__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k20608,else__18763__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__20613,request){
var self__ = this;
var map__20614 = p__20613;
var map__20614__$1 = ((((!((map__20614 == null)))?((((map__20614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20614):map__20614);
var content_type__$1 = cljs.core.get.call(null,map__20614__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__20616 = this;
var map__20616__$1 = ((((!((map__20616 == null)))?((((map__20616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20616.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20616):map__20616);
var content_type__$2 = cljs.core.get.call(null,map__20616__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__20616,map__20616__$1,content_type__$2,map__20614,map__20614__$1,content_type__$1){
return (function (p1__20606_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__18072__auto__ = p1__20606_SHARP_;
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__20616,map__20616__$1,content_type__$2,map__20614,map__20614__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__20618,xhrio){
var self__ = this;
var map__20619 = p__20618;
var map__20619__$1 = ((((!((map__20619 == null)))?((((map__20619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20619):map__20619);
var format = map__20619__$1;
var read__$1 = cljs.core.get.call(null,map__20619__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__20621 = this;
var map__20621__$1 = ((((!((map__20621 == null)))?((((map__20621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20621):map__20621);
var format__$1 = map__20621__$1;
var read__$2 = cljs.core.get.call(null,map__20621__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__20624 = status;
switch (G__20624) {
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
}catch (e20625){if((e20625 instanceof Object)){
var e = e20625;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e20625;

}
}
}
}catch (e20623){if((e20623 instanceof Object)){
var e = e20623;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e20623;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18774__auto__,writer__18775__auto__,opts__18776__auto__){
var self__ = this;
var this__18774__auto____$1 = this;
var pr_pair__18777__auto__ = ((function (this__18774__auto____$1){
return (function (keyval__18778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,cljs.core.pr_writer,""," ","",opts__18776__auto__,keyval__18778__auto__);
});})(this__18774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,pr_pair__18777__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__18776__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20607){
var self__ = this;
var G__20607__$1 = this;
return (new cljs.core.RecordIter((0),G__20607__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18758__auto__){
var self__ = this;
var this__18758__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18755__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18764__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18756__auto__){
var self__ = this;
var this__18756__auto____$1 = this;
var h__18528__auto__ = self__.__hash;
if(!((h__18528__auto__ == null))){
return h__18528__auto__;
} else {
var h__18528__auto____$1 = ((function (h__18528__auto__,this__18756__auto____$1){
return (function (coll__18757__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__18757__auto__));
});})(h__18528__auto__,this__18756__auto____$1))
.call(null,this__18756__auto____$1);
self__.__hash = h__18528__auto____$1;

return h__18528__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20609,other20610){
var self__ = this;
var this20609__$1 = this;
return (!((other20610 == null))) && ((this20609__$1.constructor === other20610.constructor)) && (cljs.core._EQ_.call(null,this20609__$1.read,other20610.read)) && (cljs.core._EQ_.call(null,this20609__$1.description,other20610.description)) && (cljs.core._EQ_.call(null,this20609__$1.content_type,other20610.content_type)) && (cljs.core._EQ_.call(null,this20609__$1.__extmap,other20610.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18769__auto__,k__18770__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__18770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18769__auto____$1),self__.__meta),k__18770__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18770__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18767__auto__,k__18768__auto__,G__20607){
var self__ = this;
var this__18767__auto____$1 = this;
var pred__20626 = cljs.core.keyword_identical_QMARK_;
var expr__20627 = k__18768__auto__;
if(cljs.core.truth_(pred__20626.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__20627))){
return (new ajax.interceptors.ResponseFormat(G__20607,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20626.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__20627))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__20607,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20626.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__20627))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__20607,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18768__auto__,G__20607),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18772__auto__){
var self__ = this;
var this__18772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18759__auto__,G__20607){
var self__ = this;
var this__18759__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__20607,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18765__auto__,entry__18766__auto__){
var self__ = this;
var this__18765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18766__auto__)){
return this__18765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18766__auto__,(0)),cljs.core._nth.call(null,entry__18766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18765__auto____$1,entry__18766__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__18798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__18798__auto__,writer__18799__auto__){
return cljs.core._write.call(null,writer__18799__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__20611){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__20611),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__20611),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__20611),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__20611,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
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
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18760__auto__,k__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
return this__18760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18761__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18762__auto__,k20632,else__18763__auto__){
var self__ = this;
var this__18762__auto____$1 = this;
var G__20636 = k20632;
switch (G__20636) {
default:
return cljs.core.get.call(null,self__.__extmap,k20632,else__18763__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__20637){
var self__ = this;
var map__20638 = p__20637;
var map__20638__$1 = ((((!((map__20638 == null)))?((((map__20638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20638):map__20638);
var request = map__20638__$1;
var uri = cljs.core.get.call(null,map__20638__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20638__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__20638__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__20638__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__20638__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__20640 = ajax.interceptors.get_request_format.call(null,format);
var map__20640__$1 = ((((!((map__20640 == null)))?((((map__20640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20640.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20640):map__20640);
var write = cljs.core.get.call(null,map__20640__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__20640__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__18072__auto__ = headers;
if(cljs.core.truth_(or__18072__auto__)){
return or__18072__auto__;
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18774__auto__,writer__18775__auto__,opts__18776__auto__){
var self__ = this;
var this__18774__auto____$1 = this;
var pr_pair__18777__auto__ = ((function (this__18774__auto____$1){
return (function (keyval__18778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,cljs.core.pr_writer,""," ","",opts__18776__auto__,keyval__18778__auto__);
});})(this__18774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,pr_pair__18777__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__18776__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20631){
var self__ = this;
var G__20631__$1 = this;
return (new cljs.core.RecordIter((0),G__20631__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18758__auto__){
var self__ = this;
var this__18758__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18755__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18764__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18756__auto__){
var self__ = this;
var this__18756__auto____$1 = this;
var h__18528__auto__ = self__.__hash;
if(!((h__18528__auto__ == null))){
return h__18528__auto__;
} else {
var h__18528__auto____$1 = ((function (h__18528__auto__,this__18756__auto____$1){
return (function (coll__18757__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__18757__auto__));
});})(h__18528__auto__,this__18756__auto____$1))
.call(null,this__18756__auto____$1);
self__.__hash = h__18528__auto____$1;

return h__18528__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20633,other20634){
var self__ = this;
var this20633__$1 = this;
return (!((other20634 == null))) && ((this20633__$1.constructor === other20634.constructor)) && (cljs.core._EQ_.call(null,this20633__$1.__extmap,other20634.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18769__auto__,k__18770__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18769__auto____$1),self__.__meta),k__18770__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18770__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18767__auto__,k__18768__auto__,G__20631){
var self__ = this;
var this__18767__auto____$1 = this;
var pred__20642 = cljs.core.keyword_identical_QMARK_;
var expr__20643 = k__18768__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18768__auto__,G__20631),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18772__auto__){
var self__ = this;
var this__18772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18759__auto__,G__20631){
var self__ = this;
var this__18759__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__20631,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18765__auto__,entry__18766__auto__){
var self__ = this;
var this__18765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18766__auto__)){
return this__18765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18766__auto__,(0)),cljs.core._nth.call(null,entry__18766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18765__auto____$1,entry__18766__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__18798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__18798__auto__,writer__18799__auto__){
return cljs.core._write.call(null,writer__18799__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__20635){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__20635)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__20647 = arguments.length;
switch (G__20647) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__20648,uri){
var map__20649 = p__20648;
var map__20649__$1 = ((((!((map__20649 == null)))?((((map__20649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20649):map__20649);
var vec_strategy = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__20649__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__20651){
var map__20652 = p__20651;
var map__20652__$1 = ((((!((map__20652 == null)))?((((map__20652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20652):map__20652);
var vec_strategy = cljs.core.get.call(null,map__20652__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__20652__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__20652,map__20652__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__20652,map__20652__$1,vec_strategy,params))
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
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18760__auto__,k__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
return this__18760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18761__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18762__auto__,k20656,else__18763__auto__){
var self__ = this;
var this__18762__auto____$1 = this;
var G__20660 = k20656;
switch (G__20660) {
default:
return cljs.core.get.call(null,self__.__extmap,k20656,else__18763__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__20661){
var self__ = this;
var map__20662 = p__20661;
var map__20662__$1 = ((((!((map__20662 == null)))?((((map__20662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20662):map__20662);
var request = map__20662__$1;
var method = cljs.core.get.call(null,map__20662__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18774__auto__,writer__18775__auto__,opts__18776__auto__){
var self__ = this;
var this__18774__auto____$1 = this;
var pr_pair__18777__auto__ = ((function (this__18774__auto____$1){
return (function (keyval__18778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,cljs.core.pr_writer,""," ","",opts__18776__auto__,keyval__18778__auto__);
});})(this__18774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,pr_pair__18777__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__18776__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20655){
var self__ = this;
var G__20655__$1 = this;
return (new cljs.core.RecordIter((0),G__20655__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18758__auto__){
var self__ = this;
var this__18758__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18755__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18764__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18756__auto__){
var self__ = this;
var this__18756__auto____$1 = this;
var h__18528__auto__ = self__.__hash;
if(!((h__18528__auto__ == null))){
return h__18528__auto__;
} else {
var h__18528__auto____$1 = ((function (h__18528__auto__,this__18756__auto____$1){
return (function (coll__18757__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__18757__auto__));
});})(h__18528__auto__,this__18756__auto____$1))
.call(null,this__18756__auto____$1);
self__.__hash = h__18528__auto____$1;

return h__18528__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20657,other20658){
var self__ = this;
var this20657__$1 = this;
return (!((other20658 == null))) && ((this20657__$1.constructor === other20658.constructor)) && (cljs.core._EQ_.call(null,this20657__$1.__extmap,other20658.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18769__auto__,k__18770__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18769__auto____$1),self__.__meta),k__18770__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18770__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18767__auto__,k__18768__auto__,G__20655){
var self__ = this;
var this__18767__auto____$1 = this;
var pred__20664 = cljs.core.keyword_identical_QMARK_;
var expr__20665 = k__18768__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18768__auto__,G__20655),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18772__auto__){
var self__ = this;
var this__18772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18759__auto__,G__20655){
var self__ = this;
var this__18759__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__20655,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18765__auto__,entry__18766__auto__){
var self__ = this;
var this__18765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18766__auto__)){
return this__18765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18766__auto__,(0)),cljs.core._nth.call(null,entry__18766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18765__auto____$1,entry__18766__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__18798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__18798__auto__,writer__18799__auto__){
return cljs.core._write.call(null,writer__18799__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__20659){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__20659)),null));
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
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18760__auto__,k__18761__auto__){
var self__ = this;
var this__18760__auto____$1 = this;
return this__18760__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__18761__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18762__auto__,k20669,else__18763__auto__){
var self__ = this;
var this__18762__auto____$1 = this;
var G__20673 = k20669;
switch (G__20673) {
default:
return cljs.core.get.call(null,self__.__extmap,k20669,else__18763__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__20674){
var self__ = this;
var map__20675 = p__20674;
var map__20675__$1 = ((((!((map__20675 == null)))?((((map__20675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20675):map__20675);
var request = map__20675__$1;
var body = cljs.core.get.call(null,map__20675__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18774__auto__,writer__18775__auto__,opts__18776__auto__){
var self__ = this;
var this__18774__auto____$1 = this;
var pr_pair__18777__auto__ = ((function (this__18774__auto____$1){
return (function (keyval__18778__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,cljs.core.pr_writer,""," ","",opts__18776__auto__,keyval__18778__auto__);
});})(this__18774__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18775__auto__,pr_pair__18777__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__18776__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20668){
var self__ = this;
var G__20668__$1 = this;
return (new cljs.core.RecordIter((0),G__20668__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18758__auto__){
var self__ = this;
var this__18758__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18755__auto__){
var self__ = this;
var this__18755__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18764__auto__){
var self__ = this;
var this__18764__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18756__auto__){
var self__ = this;
var this__18756__auto____$1 = this;
var h__18528__auto__ = self__.__hash;
if(!((h__18528__auto__ == null))){
return h__18528__auto__;
} else {
var h__18528__auto____$1 = ((function (h__18528__auto__,this__18756__auto____$1){
return (function (coll__18757__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__18757__auto__));
});})(h__18528__auto__,this__18756__auto____$1))
.call(null,this__18756__auto____$1);
self__.__hash = h__18528__auto____$1;

return h__18528__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20670,other20671){
var self__ = this;
var this20670__$1 = this;
return (!((other20671 == null))) && ((this20670__$1.constructor === other20671.constructor)) && (cljs.core._EQ_.call(null,this20670__$1.__extmap,other20671.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18769__auto__,k__18770__auto__){
var self__ = this;
var this__18769__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__18770__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18769__auto____$1),self__.__meta),k__18770__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18770__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18767__auto__,k__18768__auto__,G__20668){
var self__ = this;
var this__18767__auto____$1 = this;
var pred__20677 = cljs.core.keyword_identical_QMARK_;
var expr__20678 = k__18768__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18768__auto__,G__20668),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18772__auto__){
var self__ = this;
var this__18772__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18759__auto__,G__20668){
var self__ = this;
var this__18759__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__20668,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18765__auto__,entry__18766__auto__){
var self__ = this;
var this__18765__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18766__auto__)){
return this__18765__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__18766__auto__,(0)),cljs.core._nth.call(null,entry__18766__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18765__auto____$1,entry__18766__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__18798__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__18798__auto__,writer__18799__auto__){
return cljs.core._write.call(null,writer__18799__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__20672){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__20672)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__20681){
var map__20682 = p__20681;
var map__20682__$1 = ((((!((map__20682 == null)))?((((map__20682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20682.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20682):map__20682);
var opts = map__20682__$1;
var response_format = cljs.core.get.call(null,map__20682__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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
