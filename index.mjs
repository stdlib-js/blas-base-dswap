// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";function n(r,n,e,f,t){var i,o,u,a,d,s;if(r<=0)return f;if(1===e&&1===t){if((a=r%3)>0)for(d=0;d<a;d++)i=n[d],n[d]=f[d],f[d]=i;if(r<3)return f;for(d=a;d<r;d+=3)i=n[d],n[d]=f[d],f[d]=i,i=n[s=d+1],n[s]=f[s],f[s]=i,i=n[s+=1],n[s]=f[s],f[s]=i;return f}for(o=e<0?(1-r)*e:0,u=t<0?(1-r)*t:0,d=0;d<r;d++)i=n[o],n[o]=f[u],f[u]=i,o+=e,u+=t;return f}function e(r,n,e,f,t,i,o){var u,a,d,s,l;if(r<=0)return t;if(a=f,d=o,1===e&&1===i){if((s=r%3)>0)for(l=0;l<s;l++)u=n[a],n[a]=t[d],t[d]=u,a+=e,d+=i;if(r<3)return t;for(l=s;l<r;l+=3)u=n[a],n[a]=t[d],t[d]=u,u=n[a+1],n[a+1]=t[d+1],t[d+1]=u,u=n[a+2],n[a+2]=t[d+2],t[d+2]=u,a+=3,d+=3;return t}for(l=0;l<r;l++)u=n[a],n[a]=t[d],t[d]=u,a+=e,d+=i;return t}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map
