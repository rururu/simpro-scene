define(["./when-54c2dc71","./Check-6c0211bc","./Math-fc8cecf5","./Cartesian2-bddc1162","./Transforms-d07bb42c","./RuntimeError-2109023a","./WebGLConstants-76bb35d1","./ComponentDatatype-6d99a1ee","./GeometryAttribute-be1a3386","./GeometryAttributes-4fcfcf40","./AttributeCompression-9fc99391","./GeometryPipeline-c2d75081","./EncodedCartesian3-4df2eabb","./IndexDatatype-53503fee","./IntersectionTests-8abf6dba","./Plane-c8971487","./PrimitivePipeline-1823f7f9","./WebMercatorProjection-df58d479","./createTaskProcessorWorker"],function(f,e,r,t,n,o,i,a,c,s,d,u,b,m,p,l,y,P,k){"use strict";var C={};return k(function(e,r){for(var t=e.subTasks,n=t.length,o=new Array(n),i=0;i<n;i++){var a=t[i],c=a.geometry,s=a.moduleName;f.defined(s)?(s=function(e){var r=C[e];return f.defined(r)||("object"==typeof exports?C[r]=r=require("Workers/"+e):require(["Workers/"+e],function(e){C[r=e]=e})),r}(s),o[i]=s(c,a.offset)):o[i]=c}return f.when.all(o,function(e){return y.PrimitivePipeline.packCreateGeometryResults(e,r)})})});
