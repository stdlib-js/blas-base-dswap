"use strict";var m=function(n,a){return function(){return a||n((a={exports:{}}).exports,a),a.exports}};var w=m(function(G,l){
var c=3;function g(n,a,s,v,e){var t,p,u,i,r,f;if(n<=0)return v;if(s===1&&e===1){if(i=n%c,i>0)for(r=0;r<i;r++)t=a[r],a[r]=v[r],v[r]=t;if(n<c)return v;for(r=i;r<n;r+=c)t=a[r],a[r]=v[r],v[r]=t,f=r+1,t=a[f],a[f]=v[f],v[f]=t,f+=1,t=a[f],a[f]=v[f],v[f]=t;return v}for(s<0?p=(1-n)*s:p=0,e<0?u=(1-n)*e:u=0,r=0;r<n;r++)t=a[p],a[p]=v[u],v[u]=t,p+=s,u+=e;return v}l.exports=g
});var R=m(function(H,M){
var q=3;function h(n,a,s,v,e,t,p){var u,i,r,f,o;if(n<=0)return e;if(i=v,r=p,s===1&&t===1){if(f=n%q,f>0)for(o=0;o<f;o++)u=a[i],a[i]=e[r],e[r]=u,i+=s,r+=t;if(n<q)return e;for(o=f;o<n;o+=q)u=a[i],a[i]=e[r],e[r]=u,u=a[i+1],a[i+1]=e[r+1],e[r+1]=u,u=a[i+2],a[i+2]=e[r+2],e[r+2]=u,i+=q,r+=q;return e}for(o=0;o<n;o++)u=a[i],a[i]=e[r],e[r]=u,i+=s,r+=t;return e}M.exports=h
});var O=m(function(I,E){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),_=w(),z=R();k(_,"ndarray",z);E.exports=_
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=O(),j,b=B(A(__dirname,"./native.js"));C(b)?j=D:j=b;module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
