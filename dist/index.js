"use strict";var c=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var m=c(function(G,w){
var f=3;function b(u,r,n,o,e,s,p){var t,a,i,q,v;if(u<=0)return e;if(a=o,i=p,n===1&&s===1){if(q=u%f,q>0)for(v=0;v<q;v++)t=r[a],r[a]=e[i],e[i]=t,a+=n,i+=s;if(u<f)return e;for(v=q;v<u;v+=f)t=r[a],r[a]=e[i],e[i]=t,t=r[a+1],r[a+1]=e[i+1],e[i+1]=t,t=r[a+2],r[a+2]=e[i+2],e[i+2]=t,a+=f,i+=f;return e}for(v=0;v<u;v++)t=r[a],r[a]=e[i],e[i]=t,a+=n,i+=s;return e}w.exports=b
});var R=c(function(H,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(u,r,n,o,e){var s,p;return u<=0?o:(s=j(u,n),p=j(u,e),g(u,r,n,s,o,e,p))}l.exports=h
});var M=c(function(I,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=R(),z=m();k(_,"ndarray",z);E.exports=_
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=M(),d,O=B(A(__dirname,"./native.js"));C(O)?d=D:d=O;module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
