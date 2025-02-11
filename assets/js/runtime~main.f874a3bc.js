(()=>{"use strict";var e,t,r,a,o,c={},n={};function f(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=c,f.c=n,e=[],f.O=(t,r,a,o)=>{if(!r){var c=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var n=!0,d=0;d<r.length;d++)(!1&o||c>=o)&&Object.keys(f.O).every((e=>f.O[e](r[d])))?r.splice(d--,1):(n=!1,o<c&&(c=o));if(n){e.splice(b--,1);var i=a();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,f.d(o,c),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({48:"a94703ab",98:"a7bd4aaa",111:"1e3eb3c2",123:"cd096d7c",380:"70f3cba7",401:"17896441",487:"32b596b7",497:"bc225776",567:"c8e334a7",612:"00e2c201",616:"08e39af7",643:"72a427b3",647:"5e95c892",693:"137d5ed5",742:"aba21aa0",755:"9c3ff40a",857:"3021cf83",927:"1dc09441",954:"22bafee6",969:"14eb3368",988:"4cd98e71",998:"4bfdab7e"}[e]||e)+"."+{42:"aace83c8",48:"a2b0312b",98:"a5984bde",111:"3720f161",123:"d3e3048b",380:"eb1cfa95",401:"10ed1a69",487:"ad46014a",497:"d875557c",567:"6d00e666",612:"106aff67",616:"c73f0118",643:"14c8b540",647:"10278fa7",693:"b6a174ce",742:"eb7bf6f2",755:"0b369ceb",857:"7555ddcf",927:"dd209cc4",954:"9a5cc70f",969:"63341f75",988:"6bde9dd7",998:"6b89623b"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",f.l=(e,t,r,c)=>{if(a[e])a[e].push(t);else{var n,d;if(void 0!==r)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(d=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,f.nc&&n.setAttribute("nonce",f.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),d&&document.head.appendChild(n)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/react-native-safe-area-context/",f.gca=function(e){return e={17896441:"401",a94703ab:"48",a7bd4aaa:"98","1e3eb3c2":"111",cd096d7c:"123","70f3cba7":"380","32b596b7":"487",bc225776:"497",c8e334a7:"567","00e2c201":"612","08e39af7":"616","72a427b3":"643","5e95c892":"647","137d5ed5":"693",aba21aa0:"742","9c3ff40a":"755","3021cf83":"857","1dc09441":"927","22bafee6":"954","14eb3368":"969","4cd98e71":"988","4bfdab7e":"998"}[e]||e,f.p+f.u(e)},(()=>{var e={354:0,869:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var c=f.p+f.u(t),n=new Error;f.l(c,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",n.name="ChunkLoadError",n.type=o,n.request=c,a[1](n)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,c=r[0],n=r[1],d=r[2],i=0;if(c.some((t=>0!==e[t]))){for(a in n)f.o(n,a)&&(f.m[a]=n[a]);if(d)var b=d(f)}for(t&&t(r);i<c.length;i++)o=c[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(b)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();