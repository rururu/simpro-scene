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
ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23927__auto__,k__23928__auto__){
var self__ = this;
var this__23927__auto____$1 = this;
return this__23927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__23928__auto__,null);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23929__auto__,k25744,else__23930__auto__){
var self__ = this;
var this__23929__auto____$1 = this;
var G__25748 = k25744;
var G__25748__$1 = (((G__25748 instanceof cljs.core.Keyword))?G__25748.fqn:null);
switch (G__25748__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k25744,else__23930__auto__);

}
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__25749,opts){
var self__ = this;
var map__25750 = p__25749;
var map__25750__$1 = ((((!((map__25750 == null)))?((((map__25750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25750):map__25750);
var request__$1 = cljs.core.get.call(null,map__25750__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__25752 = this;
var map__25752__$1 = ((((!((map__25752 == null)))?((((map__25752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25752):map__25752);
var request__$2 = cljs.core.get.call(null,map__25752__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return request__$2.call(null,opts);
});

ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__25754,xhrio){
var self__ = this;
var map__25755 = p__25754;
var map__25755__$1 = ((((!((map__25755 == null)))?((((map__25755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25755):map__25755);
var response__$1 = cljs.core.get.call(null,map__25755__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__25757 = this;
var map__25757__$1 = ((((!((map__25757 == null)))?((((map__25757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25757):map__25757);
var response__$2 = cljs.core.get.call(null,map__25757__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return response__$2.call(null,xhrio);
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23941__auto__,writer__23942__auto__,opts__23943__auto__){
var self__ = this;
var this__23941__auto____$1 = this;
var pr_pair__23944__auto__ = ((function (this__23941__auto____$1){
return (function (keyval__23945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,cljs.core.pr_writer,""," ","",opts__23943__auto__,keyval__23945__auto__);
});})(this__23941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,pr_pair__23944__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__23943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25743){
var self__ = this;
var G__25743__$1 = this;
return (new cljs.core.RecordIter((0),G__25743__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23925__auto__){
var self__ = this;
var this__23925__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23922__auto__){
var self__ = this;
var this__23922__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23931__auto__){
var self__ = this;
var this__23931__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23923__auto__){
var self__ = this;
var this__23923__auto____$1 = this;
var h__23695__auto__ = self__.__hash;
if(!((h__23695__auto__ == null))){
return h__23695__auto__;
} else {
var h__23695__auto____$1 = ((function (h__23695__auto__,this__23923__auto____$1){
return (function (coll__23924__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll.call(null,coll__23924__auto__));
});})(h__23695__auto__,this__23923__auto____$1))
.call(null,this__23923__auto____$1);
self__.__hash = h__23695__auto____$1;

return h__23695__auto____$1;
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25745,other25746){
var self__ = this;
var this25745__$1 = this;
return (!((other25746 == null))) && ((this25745__$1.constructor === other25746.constructor)) && (cljs.core._EQ_.call(null,this25745__$1.name,other25746.name)) && (cljs.core._EQ_.call(null,this25745__$1.request,other25746.request)) && (cljs.core._EQ_.call(null,this25745__$1.response,other25746.response)) && (cljs.core._EQ_.call(null,this25745__$1.__extmap,other25746.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23936__auto__,k__23937__auto__){
var self__ = this;
var this__23936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__23937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23936__auto____$1),self__.__meta),k__23937__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23937__auto__)),null));
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23934__auto__,k__23935__auto__,G__25743){
var self__ = this;
var this__23934__auto____$1 = this;
var pred__25759 = cljs.core.keyword_identical_QMARK_;
var expr__25760 = k__23935__auto__;
if(cljs.core.truth_(pred__25759.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__25760))){
return (new ajax.interceptors.StandardInterceptor(G__25743,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25759.call(null,new cljs.core.Keyword(null,"request","request",1772954723),expr__25760))){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__25743,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25759.call(null,new cljs.core.Keyword(null,"response","response",-1068424192),expr__25760))){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__25743,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23935__auto__,G__25743),null));
}
}
}
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23939__auto__){
var self__ = this;
var this__23939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23926__auto__,G__25743){
var self__ = this;
var this__23926__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__25743,self__.__extmap,self__.__hash));
});

ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23932__auto__,entry__23933__auto__){
var self__ = this;
var this__23932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23933__auto__)){
return this__23932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__23933__auto__,(0)),cljs.core._nth.call(null,entry__23933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23932__auto____$1,entry__23933__auto__);
}
});

ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
});

ajax.interceptors.StandardInterceptor.cljs$lang$type = true;

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__23965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__23965__auto__,writer__23966__auto__){
return cljs.core._write.call(null,writer__23966__auto__,"ajax.interceptors/StandardInterceptor");
});

ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__25747){
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__25747),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__25747),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__25747),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25747,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192))),null));
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
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__25763,xhrio){
var map__25764 = p__25763;
var map__25764__$1 = ((((!((map__25764 == null)))?((((map__25764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25764):map__25764);
var description = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__24525__auto__ = [];
var len__24518__auto___25770 = arguments.length;
var i__24519__auto___25771 = (0);
while(true){
if((i__24519__auto___25771 < len__24518__auto___25770)){
args__24525__auto__.push((arguments[i__24519__auto___25771]));

var G__25772 = (i__24519__auto___25771 + (1));
i__24519__auto___25771 = G__25772;
continue;
} else {
}
break;
}

var argseq__24526__auto__ = ((((3) < args__24525__auto__.length))?(new cljs.core.IndexedSeq(args__24525__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24526__auto__);
});

ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.interceptors.fail.cljs$lang$maxFixedArity = (3);

ajax.interceptors.fail.cljs$lang$applyTo = (function (seq25766){
var G__25767 = cljs.core.first.call(null,seq25766);
var seq25766__$1 = cljs.core.next.call(null,seq25766);
var G__25768 = cljs.core.first.call(null,seq25766__$1);
var seq25766__$2 = cljs.core.next.call(null,seq25766__$1);
var G__25769 = cljs.core.first.call(null,seq25766__$2);
var seq25766__$3 = cljs.core.next.call(null,seq25766__$2);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic(G__25767,G__25768,G__25769,seq25766__$3);
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
ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23927__auto__,k__23928__auto__){
var self__ = this;
var this__23927__auto____$1 = this;
return this__23927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__23928__auto__,null);
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23929__auto__,k25775,else__23930__auto__){
var self__ = this;
var this__23929__auto____$1 = this;
var G__25779 = k25775;
var G__25779__$1 = (((G__25779 instanceof cljs.core.Keyword))?G__25779.fqn:null);
switch (G__25779__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k25775,else__23930__auto__);

}
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__25780,request){
var self__ = this;
var map__25781 = p__25780;
var map__25781__$1 = ((((!((map__25781 == null)))?((((map__25781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25781):map__25781);
var content_type__$1 = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__25783 = this;
var map__25783__$1 = ((((!((map__25783 == null)))?((((map__25783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25783):map__25783);
var content_type__$2 = cljs.core.get.call(null,map__25783__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.call(null,request,new cljs.core.Keyword(null,"headers","headers",-835030129),((function (map__25783,map__25783__$1,content_type__$2,map__25781,map__25781__$1,content_type__$1){
return (function (p1__25773_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header.call(null,content_type__$2)], null),(function (){var or__23239__auto__ = p1__25773_SHARP_;
if(cljs.core.truth_(or__23239__auto__)){
return or__23239__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});})(map__25783,map__25783__$1,content_type__$2,map__25781,map__25781__$1,content_type__$1))
);
});

ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__25785,xhrio){
var self__ = this;
var map__25786 = p__25785;
var map__25786__$1 = ((((!((map__25786 == null)))?((((map__25786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25786.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25786):map__25786);
var format = map__25786__$1;
var read__$1 = cljs.core.get.call(null,map__25786__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__25788 = this;
var map__25788__$1 = ((((!((map__25788 == null)))?((((map__25788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25788):map__25788);
var format__$1 = map__25788__$1;
var read__$2 = cljs.core.get.call(null,map__25788__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.interceptors.fail,status);
var G__25791 = status;
switch (G__25791) {
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
}catch (e25792){if((e25792 instanceof Object)){
var e = e25792;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response.call(null,e,status,format__$1,xhrio)], null);
} else {
throw e25792;

}
}
}
}catch (e25790){if((e25790 instanceof Object)){
var e = e25790;
var message = e.message;
return ajax.interceptors.fail.call(null,(0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e25790;

}
}});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23941__auto__,writer__23942__auto__,opts__23943__auto__){
var self__ = this;
var this__23941__auto____$1 = this;
var pr_pair__23944__auto__ = ((function (this__23941__auto____$1){
return (function (keyval__23945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,cljs.core.pr_writer,""," ","",opts__23943__auto__,keyval__23945__auto__);
});})(this__23941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,pr_pair__23944__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__23943__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25774){
var self__ = this;
var G__25774__$1 = this;
return (new cljs.core.RecordIter((0),G__25774__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23925__auto__){
var self__ = this;
var this__23925__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23922__auto__){
var self__ = this;
var this__23922__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23931__auto__){
var self__ = this;
var this__23931__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23923__auto__){
var self__ = this;
var this__23923__auto____$1 = this;
var h__23695__auto__ = self__.__hash;
if(!((h__23695__auto__ == null))){
return h__23695__auto__;
} else {
var h__23695__auto____$1 = ((function (h__23695__auto__,this__23923__auto____$1){
return (function (coll__23924__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll.call(null,coll__23924__auto__));
});})(h__23695__auto__,this__23923__auto____$1))
.call(null,this__23923__auto____$1);
self__.__hash = h__23695__auto____$1;

return h__23695__auto____$1;
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25776,other25777){
var self__ = this;
var this25776__$1 = this;
return (!((other25777 == null))) && ((this25776__$1.constructor === other25777.constructor)) && (cljs.core._EQ_.call(null,this25776__$1.read,other25777.read)) && (cljs.core._EQ_.call(null,this25776__$1.description,other25777.description)) && (cljs.core._EQ_.call(null,this25776__$1.content_type,other25777.content_type)) && (cljs.core._EQ_.call(null,this25776__$1.__extmap,other25777.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23936__auto__,k__23937__auto__){
var self__ = this;
var this__23936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__23937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23936__auto____$1),self__.__meta),k__23937__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23937__auto__)),null));
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23934__auto__,k__23935__auto__,G__25774){
var self__ = this;
var this__23934__auto____$1 = this;
var pred__25793 = cljs.core.keyword_identical_QMARK_;
var expr__25794 = k__23935__auto__;
if(cljs.core.truth_(pred__25793.call(null,new cljs.core.Keyword(null,"read","read",1140058661),expr__25794))){
return (new ajax.interceptors.ResponseFormat(G__25774,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25793.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),expr__25794))){
return (new ajax.interceptors.ResponseFormat(self__.read,G__25774,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25793.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),expr__25794))){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__25774,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23935__auto__,G__25774),null));
}
}
}
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23939__auto__){
var self__ = this;
var this__23939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23926__auto__,G__25774){
var self__ = this;
var this__23926__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__25774,self__.__extmap,self__.__hash));
});

ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23932__auto__,entry__23933__auto__){
var self__ = this;
var this__23932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23933__auto__)){
return this__23932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__23933__auto__,(0)),cljs.core._nth.call(null,entry__23933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23932__auto____$1,entry__23933__auto__);
}
});

ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
});

ajax.interceptors.ResponseFormat.cljs$lang$type = true;

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__23965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__23965__auto__,writer__23966__auto__){
return cljs.core._write.call(null,writer__23966__auto__,"ajax.interceptors/ResponseFormat");
});

ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__25778){
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__25778),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__25778),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__25778),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25778,new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634))),null));
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
ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23927__auto__,k__23928__auto__){
var self__ = this;
var this__23927__auto____$1 = this;
return this__23927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__23928__auto__,null);
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23929__auto__,k25799,else__23930__auto__){
var self__ = this;
var this__23929__auto____$1 = this;
var G__25803 = k25799;
switch (G__25803) {
default:
return cljs.core.get.call(null,self__.__extmap,k25799,else__23930__auto__);

}
});

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__25804){
var self__ = this;
var map__25805 = p__25804;
var map__25805__$1 = ((((!((map__25805 == null)))?((((map__25805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25805):map__25805);
var request = map__25805__$1;
var uri = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__25805__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__25807 = ajax.interceptors.get_request_format.call(null,format);
var map__25807__$1 = ((((!((map__25807 == null)))?((((map__25807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25807.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25807):map__25807);
var write = cljs.core.get.call(null,map__25807__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.call(null,map__25807__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?ajax.interceptors.apply_request_format.call(null,write,params):ajax.util.throw_error.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__23239__auto__ = headers;
if(cljs.core.truth_(or__23239__auto__)){
return or__23239__auto__;
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

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23941__auto__,writer__23942__auto__,opts__23943__auto__){
var self__ = this;
var this__23941__auto____$1 = this;
var pr_pair__23944__auto__ = ((function (this__23941__auto____$1){
return (function (keyval__23945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,cljs.core.pr_writer,""," ","",opts__23943__auto__,keyval__23945__auto__);
});})(this__23941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,pr_pair__23944__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__23943__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25798){
var self__ = this;
var G__25798__$1 = this;
return (new cljs.core.RecordIter((0),G__25798__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23925__auto__){
var self__ = this;
var this__23925__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23922__auto__){
var self__ = this;
var this__23922__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23931__auto__){
var self__ = this;
var this__23931__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23923__auto__){
var self__ = this;
var this__23923__auto____$1 = this;
var h__23695__auto__ = self__.__hash;
if(!((h__23695__auto__ == null))){
return h__23695__auto__;
} else {
var h__23695__auto____$1 = ((function (h__23695__auto__,this__23923__auto____$1){
return (function (coll__23924__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll.call(null,coll__23924__auto__));
});})(h__23695__auto__,this__23923__auto____$1))
.call(null,this__23923__auto____$1);
self__.__hash = h__23695__auto____$1;

return h__23695__auto____$1;
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25800,other25801){
var self__ = this;
var this25800__$1 = this;
return (!((other25801 == null))) && ((this25800__$1.constructor === other25801.constructor)) && (cljs.core._EQ_.call(null,this25800__$1.__extmap,other25801.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23936__auto__,k__23937__auto__){
var self__ = this;
var this__23936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__23937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23936__auto____$1),self__.__meta),k__23937__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23937__auto__)),null));
}
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23934__auto__,k__23935__auto__,G__25798){
var self__ = this;
var this__23934__auto____$1 = this;
var pred__25809 = cljs.core.keyword_identical_QMARK_;
var expr__25810 = k__23935__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23935__auto__,G__25798),null));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23939__auto__){
var self__ = this;
var this__23939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23926__auto__,G__25798){
var self__ = this;
var this__23926__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__25798,self__.__extmap,self__.__hash));
});

ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23932__auto__,entry__23933__auto__){
var self__ = this;
var this__23932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23933__auto__)){
return this__23932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__23933__auto__,(0)),cljs.core._nth.call(null,entry__23933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23932__auto____$1,entry__23933__auto__);
}
});

ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true;

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__23965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__23965__auto__,writer__23966__auto__){
return cljs.core._write.call(null,writer__23966__auto__,"ajax.interceptors/ApplyRequestFormat");
});

ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__25802){
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25802)),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__25814 = arguments.length;
switch (G__25814) {
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

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__25815,uri){
var map__25816 = p__25815;
var map__25816__$1 = ((((!((map__25816 == null)))?((((map__25816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25816):map__25816);
var vec_strategy = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__25816__$1,new cljs.core.Keyword(null,"params","params",710516235));

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});

ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__25818){
var map__25819 = p__25818;
var map__25819__$1 = ((((!((map__25819 == null)))?((((map__25819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25819):map__25819);
var vec_strategy = cljs.core.get.call(null,map__25819__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.call(null,map__25819__$1,new cljs.core.Keyword(null,"params","params",710516235));
return ((function (map__25819,map__25819__$1,vec_strategy,params){
return (function (uri){

if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str.call(null,vec_strategy,params))].join('');
} else {
return uri;
}
});
;})(map__25819,map__25819__$1,vec_strategy,params))
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
ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23927__auto__,k__23928__auto__){
var self__ = this;
var this__23927__auto____$1 = this;
return this__23927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__23928__auto__,null);
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23929__auto__,k25823,else__23930__auto__){
var self__ = this;
var this__23929__auto____$1 = this;
var G__25827 = k25823;
switch (G__25827) {
default:
return cljs.core.get.call(null,self__.__extmap,k25823,else__23930__auto__);

}
});

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__25828){
var self__ = this;
var map__25829 = p__25828;
var map__25829__$1 = ((((!((map__25829 == null)))?((((map__25829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25829):map__25829);
var request = map__25829__$1;
var method = cljs.core.get.call(null,map__25829__$1,new cljs.core.Keyword(null,"method","method",55703592));
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

ajax.interceptors.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23941__auto__,writer__23942__auto__,opts__23943__auto__){
var self__ = this;
var this__23941__auto____$1 = this;
var pr_pair__23944__auto__ = ((function (this__23941__auto____$1){
return (function (keyval__23945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,cljs.core.pr_writer,""," ","",opts__23943__auto__,keyval__23945__auto__);
});})(this__23941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,pr_pair__23944__auto__,"#ajax.interceptors.ProcessGet{",", ","}",opts__23943__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25822){
var self__ = this;
var G__25822__$1 = this;
return (new cljs.core.RecordIter((0),G__25822__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23925__auto__){
var self__ = this;
var this__23925__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23922__auto__){
var self__ = this;
var this__23922__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23931__auto__){
var self__ = this;
var this__23931__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23923__auto__){
var self__ = this;
var this__23923__auto____$1 = this;
var h__23695__auto__ = self__.__hash;
if(!((h__23695__auto__ == null))){
return h__23695__auto__;
} else {
var h__23695__auto____$1 = ((function (h__23695__auto__,this__23923__auto____$1){
return (function (coll__23924__auto__){
return (1135316249 ^ cljs.core.hash_unordered_coll.call(null,coll__23924__auto__));
});})(h__23695__auto__,this__23923__auto____$1))
.call(null,this__23923__auto____$1);
self__.__hash = h__23695__auto____$1;

return h__23695__auto____$1;
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25824,other25825){
var self__ = this;
var this25824__$1 = this;
return (!((other25825 == null))) && ((this25824__$1.constructor === other25825.constructor)) && (cljs.core._EQ_.call(null,this25824__$1.__extmap,other25825.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23936__auto__,k__23937__auto__){
var self__ = this;
var this__23936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__23937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23936__auto____$1),self__.__meta),k__23937__auto__);
} else {
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23937__auto__)),null));
}
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23934__auto__,k__23935__auto__,G__25822){
var self__ = this;
var this__23934__auto____$1 = this;
var pred__25831 = cljs.core.keyword_identical_QMARK_;
var expr__25832 = k__23935__auto__;
return (new ajax.interceptors.ProcessGet(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23935__auto__,G__25822),null));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23939__auto__){
var self__ = this;
var this__23939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23926__auto__,G__25822){
var self__ = this;
var this__23926__auto____$1 = this;
return (new ajax.interceptors.ProcessGet(G__25822,self__.__extmap,self__.__hash));
});

ajax.interceptors.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23932__auto__,entry__23933__auto__){
var self__ = this;
var this__23932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23933__auto__)){
return this__23932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__23933__auto__,(0)),cljs.core._nth.call(null,entry__23933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23932__auto____$1,entry__23933__auto__);
}
});

ajax.interceptors.ProcessGet.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.ProcessGet.cljs$lang$type = true;

ajax.interceptors.ProcessGet.cljs$lang$ctorPrSeq = (function (this__23965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.ProcessGet.cljs$lang$ctorPrWriter = (function (this__23965__auto__,writer__23966__auto__){
return cljs.core._write.call(null,writer__23966__auto__,"ajax.interceptors/ProcessGet");
});

ajax.interceptors.__GT_ProcessGet = (function ajax$interceptors$__GT_ProcessGet(){
return (new ajax.interceptors.ProcessGet(null,null,null));
});

ajax.interceptors.map__GT_ProcessGet = (function ajax$interceptors$map__GT_ProcessGet(G__25826){
return (new ajax.interceptors.ProcessGet(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25826)),null));
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
ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23927__auto__,k__23928__auto__){
var self__ = this;
var this__23927__auto____$1 = this;
return this__23927__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__23928__auto__,null);
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23929__auto__,k25836,else__23930__auto__){
var self__ = this;
var this__23929__auto____$1 = this;
var G__25840 = k25836;
switch (G__25840) {
default:
return cljs.core.get.call(null,self__.__extmap,k25836,else__23930__auto__);

}
});

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__25841){
var self__ = this;
var map__25842 = p__25841;
var map__25842__$1 = ((((!((map__25842 == null)))?((((map__25842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25842.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25842):map__25842);
var request = map__25842__$1;
var body = cljs.core.get.call(null,map__25842__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
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

ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__23941__auto__,writer__23942__auto__,opts__23943__auto__){
var self__ = this;
var this__23941__auto____$1 = this;
var pr_pair__23944__auto__ = ((function (this__23941__auto____$1){
return (function (keyval__23945__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,cljs.core.pr_writer,""," ","",opts__23943__auto__,keyval__23945__auto__);
});})(this__23941__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__23942__auto__,pr_pair__23944__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__23943__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25835){
var self__ = this;
var G__25835__$1 = this;
return (new cljs.core.RecordIter((0),G__25835__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23925__auto__){
var self__ = this;
var this__23925__auto____$1 = this;
return self__.__meta;
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23922__auto__){
var self__ = this;
var this__23922__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__23931__auto__){
var self__ = this;
var this__23931__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23923__auto__){
var self__ = this;
var this__23923__auto____$1 = this;
var h__23695__auto__ = self__.__hash;
if(!((h__23695__auto__ == null))){
return h__23695__auto__;
} else {
var h__23695__auto____$1 = ((function (h__23695__auto__,this__23923__auto____$1){
return (function (coll__23924__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll.call(null,coll__23924__auto__));
});})(h__23695__auto__,this__23923__auto____$1))
.call(null,this__23923__auto____$1);
self__.__hash = h__23695__auto____$1;

return h__23695__auto____$1;
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25837,other25838){
var self__ = this;
var this25837__$1 = this;
return (!((other25838 == null))) && ((this25837__$1.constructor === other25838.constructor)) && (cljs.core._EQ_.call(null,this25837__$1.__extmap,other25838.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__23936__auto__,k__23937__auto__){
var self__ = this;
var this__23936__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__23937__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__23936__auto____$1),self__.__meta),k__23937__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__23937__auto__)),null));
}
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__23934__auto__,k__23935__auto__,G__25835){
var self__ = this;
var this__23934__auto____$1 = this;
var pred__25844 = cljs.core.keyword_identical_QMARK_;
var expr__25845 = k__23935__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__23935__auto__,G__25835),null));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__23939__auto__){
var self__ = this;
var this__23939__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__23926__auto__,G__25835){
var self__ = this;
var this__23926__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__25835,self__.__extmap,self__.__hash));
});

ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__23932__auto__,entry__23933__auto__){
var self__ = this;
var this__23932__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__23933__auto__)){
return this__23932__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__23933__auto__,(0)),cljs.core._nth.call(null,entry__23933__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__23932__auto____$1,entry__23933__auto__);
}
});

ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.interceptors.DirectSubmission.cljs$lang$type = true;

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__23965__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__23965__auto__,writer__23966__auto__){
return cljs.core._write.call(null,writer__23966__auto__,"ajax.interceptors/DirectSubmission");
});

ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__25839){
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25839)),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessGet(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__25848){
var map__25849 = p__25848;
var map__25849__$1 = ((((!((map__25849 == null)))?((((map__25849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25849.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25849):map__25849);
var opts = map__25849__$1;
var response_format = cljs.core.get.call(null,map__25849__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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
