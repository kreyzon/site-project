(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[286],{3454:function(e,t,r){"use strict";var n,o;e.exports=(null===(n=r.g.process)||void 0===n?void 0:n.env)&&"object"===typeof(null===(o=r.g.process)||void 0===o?void 0:o.env)?r.g.process:r(7663)},8045:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}t.default=function(e){var t=e.src,r=e.sizes,n=e.unoptimized,c=void 0!==n&&n,u=e.priority,y=void 0!==u&&u,b=e.loading,x=e.lazyRoot,E=void 0===x?null:x,O=e.lazyBoundary,k=void 0===O?"200px":O,z=e.className,I=e.quality,L=e.width,R=e.height,T=e.objectFit,P=e.objectPosition,M=e.onLoadingComplete,C=e.loader,_=void 0===C?j:C,q=e.placeholder,U=void 0===q?"empty":q,D=e.blurDataURL,N=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),W=l.useRef(null),H=l.useContext(p.ImageConfigContext),B=l.useMemo((function(){var e=g||H||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),r=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:r})}),[H]),K=N,F=r?"responsive":"intrinsic";"layout"in K&&(K.layout&&(F=K.layout),delete K.layout);var $="";if(function(e){return"object"===typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(t)){var G=w(t)?t.default:t;if(!G.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(D=D||G.blurDataURL,$=G.src,(!F||"fill"!==F)&&(R=R||G.height,L=L||G.width,!G.height||!G.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)))}t="string"===typeof t?t:$;var J=S(L),V=S(R),Q=S(I),X=!y&&("lazy"===b||"undefined"===typeof b);(t.startsWith("data:")||t.startsWith("blob:"))&&(c=!0,X=!1);m.has(t)&&(X=!1);0;var Y,Z=i(d.useIntersection({rootRef:E,rootMargin:k,disabled:!X}),2),ee=Z[0],te=Z[1],re=!X||te,ne={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},oe={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ie=!1,ae={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:T,objectPosition:P},ce="blur"===U?{filter:"blur(20px)",backgroundSize:T||"cover",backgroundImage:'url("'.concat(D,'")'),backgroundPosition:P||"0% 0%"}:{};if("fill"===F)ne.display="block",ne.position="absolute",ne.top=0,ne.left=0,ne.bottom=0,ne.right=0;else if("undefined"!==typeof J&&"undefined"!==typeof V){var ue=V/J,le=isNaN(ue)?"100%":"".concat(100*ue,"%");"responsive"===F?(ne.display="block",ne.position="relative",ie=!0,oe.paddingTop=le):"intrinsic"===F?(ne.display="inline-block",ne.position="relative",ne.maxWidth="100%",ie=!0,oe.maxWidth="100%",Y="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(J,"%27%20height=%27").concat(V,"%27/%3e")):"fixed"===F&&(ne.display="inline-block",ne.position="relative",ne.width=J,ne.height=V)}else 0;var se={src:v,srcSet:void 0,sizes:void 0};re&&(se=A({config:B,src:t,unoptimized:c,layout:F,width:J,quality:Q,sizes:r,loader:_}));var fe=t;0;var de;0;var pe=(o(de={},"imagesrcset",se.srcSet),o(de,"imagesizes",se.sizes),de),ye=l.default.useLayoutEffect,he=l.useRef(M);return l.useEffect((function(){he.current=M}),[M]),ye((function(){ee(W.current)}),[ee]),l.useEffect((function(){!function(e,t,r,n,o){var i=function(){var r=e.current;r&&(r.src!==v&&("decode"in r?r.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.current&&(m.add(t),"blur"===n&&(r.style.filter="",r.style.backgroundSize="",r.style.backgroundImage="",r.style.backgroundPosition=""),o.current)){var i=r.naturalWidth,a=r.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}})))};e.current&&(e.current.complete?i():e.current.onload=i)}(W,fe,0,U,he)}),[fe,F,U,re]),l.default.createElement("span",{style:ne},ie?l.default.createElement("span",{style:oe},Y?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:Y}):null):null,l.default.createElement("img",Object.assign({},K,se,{decoding:"async","data-nimg":F,className:z,ref:W,style:h({},ae,ce)})),X&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},K,A({config:B,src:t,unoptimized:c,layout:F,width:J,quality:Q,sizes:r,loader:_}),{decoding:"async","data-nimg":F,style:ae,className:z,loading:b||"lazy"}))),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+se.src+se.srcSet+se.sizes,rel:"preload",as:"image",href:se.srcSet?void 0:se.src},pe))):null)};var u,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),s=(u=r(5443))&&u.__esModule?u:{default:u},f=r(5809),d=r(7190),p=r(9977);function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=arguments,r=function(r){var n=null!=t[r]?t[r]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){y(e,t,n[t])}))},n=1;n<arguments.length;n++)r(n);return e}var g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"custom"},m=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var b=new Map([["default",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality;0;if(r.endsWith(".svg")&&!t.dangerouslyAllowSVG)return r;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=new URL("".concat(t.path).concat(x(r))),a=i.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString());return i.href}],["cloudinary",function(e){var t=e.config,r=e.src,n=e.width,o=e.quality,i=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(t.path).concat(i).concat(x(r))}],["akamai",function(e){var t=e.config,r=e.src,n=e.width;return"".concat(t.path).concat(x(r),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function A(e){var t=e.config,r=e.src,n=e.unoptimized,o=e.layout,i=e.width,c=e.quality,u=e.sizes,l=e.loader;if(n)return{src:r,srcSet:void 0,sizes:void 0};var s=function(e,t,r,n){var o=e.deviceSizes,i=e.allSizes;if(n&&("fill"===r||"responsive"===r)){for(var c,u=/(^|\s)(1?\d?\d)vw/g,l=[];c=u.exec(n);c)l.push(parseInt(c[2]));if(l.length){var s,f=.01*(s=Math).min.apply(s,a(l));return{widths:i.filter((function(e){return e>=o[0]*f})),kind:"w"}}return{widths:i,kind:"w"}}return"number"!==typeof t||"fill"===r||"responsive"===r?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return i.find((function(t){return t>=e}))||i[i.length-1]})))),kind:"x"}}(t,i,o,u),f=s.widths,d=s.kind,p=f.length-1;return{sizes:u||"w"!==d?u:"100vw",srcSet:f.map((function(e,n){return"".concat(l({config:t,src:r,quality:c,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({config:t,src:r,quality:c,width:f[p]})}}function S(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function j(e){var t,r=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=b.get(r);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(r))}function x(e){return"/"===e[0]?e.slice(1):e}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),u=r(387),l=r(7190);var s={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),i=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,y=e.children,h=e.replace,g=e.shallow,m=e.scroll,v=e.locale;"string"===typeof y&&(y=a.default.createElement("a",null,y));var b=(t=a.default.Children.only(y))&&"object"===typeof t&&t.ref,w=o(l.useIntersection({rootMargin:"200px"}),2),A=w[0],S=w[1],j=a.default.useCallback((function(e){A(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,A]);a.default.useEffect((function(){var e=S&&r&&c.isLocalURL(d),t="undefined"!==typeof v?v:n&&n.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,S,v,r,n]);var x={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:a}))}(e,n,d,p,h,g,m,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof v?v:n&&n.locale,O=n&&n.isLocaleDomain&&c.getDomainLocale(p,E,n&&n.locales,n&&n.domainLocales);x.href=O||c.addBasePath(c.addLocale(p,E,n&&n.defaultLocale))}return a.default.cloneElement(t,x)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,s=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],y=o(i.useState(t?t.current:null),2),h=y[0],g=y[1],m=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),l.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),u.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return i.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&g(t.current)}),[t]),[m,d]};var i=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},7663:function(e){!function(){var t={162:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var c,u=[],l=!1,s=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):s=-1,u.length&&d())}function d(){if(!l){var e=a(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++s<t;)c&&c[s].run();s=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(162);e.exports=o}()},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)},1664:function(e,t,r){e.exports=r(8418)}}]);