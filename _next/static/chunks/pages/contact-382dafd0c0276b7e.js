(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return r(9144)}])},2357:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(5893),o=r(7294),a=r(9008),i=r(214),l=r.n(i),s=r(9202),c=r.n(s),d=o.createContext({content:"",isShow:!1,closeModal:function(){}}),u=function(){var e=(0,o.useContext)(d);if(void 0==e)return null;var n=e.content,r=e.isShow,a=e.closeModal;return r?(0,t.jsx)("div",{id:"myModal",className:l().modal,style:{display:r?"block":"none"},children:(0,t.jsxs)("div",{className:l().modal_content,children:[(0,t.jsxs)("div",{className:l().modal_header,children:[(0,t.jsx)("span",{className:l().close,onClick:a,children:"\xd7"}),n.header]}),(0,t.jsx)("div",{className:l().modal_body,children:n.body}),n.footer&&(0,t.jsx)("div",{className:l().modal_footer,children:n.footer})]})}):null},f=r(1664);function h(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){h(e,n,r[n])}))}return e}function p(e){var n=e.children,r=e.pageProps,i=e.hasHeader,s=void 0!==i&&i,h=e.hasModal,p=void 0!==h&&h,_=e.propsModal,y=void 0===_?{}:_,v=(0,o.useState)(n),j=v[0],x=v[1],b=(0,o.useState)("fadeOut"),g=b[0],w=b[1];return(0,o.useEffect)((function(){w("fadeIn")}),[]),(0,o.useEffect)((function(){n===j||p||w("fadeOut")}),[n,x,j]),(0,t.jsxs)(t.Fragment,{children:[s&&(0,t.jsx)("nav",{className:c().nav,children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)(f.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(f.default,{href:"/portfolio",children:(0,t.jsx)("a",{children:"Portfolio"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(f.default,{href:"/blog",children:(0,t.jsx)("a",{children:"Blog"})})}),(0,t.jsx)("li",{children:(0,t.jsx)(f.default,{href:"/contact",children:(0,t.jsx)("a",{children:"Contact"})})})]})}),(0,t.jsxs)("div",{className:l().container,children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:r.meta.title}),(0,t.jsx)("meta",{name:"description",content:r.meta.description}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)(d.Provider,{value:m({},y),children:[(0,t.jsx)("main",{className:"".concat(l().main," ").concat(l()[g]),children:n}),p&&(0,t.jsx)(u,{})]}),(0,t.jsx)("footer",{className:l().footer,children:(0,t.jsx)("a",{href:"https://github.com/kreyzon",target:"_blank",rel:"noopener noreferrer",children:"Powered by Cleisson Vieira"})})]})]})}},8418:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},l=r(6273),s=r(387),c=r(7190);var d={};function u(e,n,r,t){if(e&&l.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;d[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,t=s.useRouter(),a=i.default.useMemo((function(){var n=o(l.resolveHref(t,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?l.resolveHref(t,e.as):a||r}}),[t,e.href,e.as]),f=a.href,h=a.as,m=e.children,p=e.replace,_=e.shallow,y=e.scroll,v=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var j=(n=i.default.Children.only(m))&&"object"===typeof n&&n.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),b=x[0],g=x[1],w=i.default.useCallback((function(e){b(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,b]);i.default.useEffect((function(){var e=g&&r&&l.isLocalURL(f),n="undefined"!==typeof v?v:t&&t.locale,o=d[f+"%"+h+(n?"%"+n:"")];e&&!o&&u(t,f,h,{locale:n})}),[h,f,g,v,r,t]);var k={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),n[o?"replace":"push"](r,t,{shallow:a,locale:s,scroll:i}))}(e,t,f,h,p,_,y,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(f)&&u(t,f,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof v?v:t&&t.locale,S=t&&t.isLocaleDomain&&l.getDomainLocale(h,I,t&&t.locales,t&&t.domainLocales);k.href=S||l.addBasePath(l.addLocale(h,I,t&&t.defaultLocale))}return i.default.cloneElement(n,k)};n.default=f},7190:function(e,n,r){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var t,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(t=r.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,t=e.disabled||!l,d=a.useRef(),u=o(a.useState(!1),2),f=u[0],h=u[1],m=o(a.useState(n?n.current:null),2),p=m[0],_=m[1],y=a.useCallback((function(e){d.current&&(d.current(),d.current=void 0),t||f||e&&e.tagName&&(d.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=s.get(t):(n=s.get(r),c.push(r));if(n)return n;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return s.set(r,n={id:r,observer:a,elements:o}),n}(r),o=t.id,a=t.observer,i=t.elements;return i.set(e,n),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),s.delete(o);var n=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:p,rootMargin:r}))}),[t,p,r,f]);return a.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),a.useEffect((function(){n&&_(n.current)}),[n]),[y,f]};var a=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},9144:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(5893),o=r(2357),a=r(214),i=r.n(a);function l(){return(0,t.jsxs)(o.Z,{pageProps:{meta:{title:"Contact",description:"Some personal information and contacts in case your want talk with me"}},hasHeader:!0,children:[(0,t.jsx)("h1",{className:i().title,children:"ABOUT ME"}),(0,t.jsxs)("div",{className:i().description_indent,children:[(0,t.jsx)("p",{children:"I was born in Teresina/Brazil, married with Ana Carla \ud83d\udc71\ud83c\udffb\u200d\u2640\ufe0f and a pet father of Yuno and Shake \ud83d\ude3b, psychedelic rock appreciatior and often listening lo-fi or trap remix beats (but sometimes I catch me listen reggae and traditional northeast forro), I like to watch terror/horror movies on weekends and to follow various kinds of animes series in lunch or dinner time, I like drink coffee on the morning and beer on the end of day, and since the start of pandemic I changed my diet for vegetarian food \ud83c\udf3f."}),(0,t.jsxs)("p",{children:["In my academic road, I graduated in Systems Analysis and Development (IFPI), MSc in Applied Computing (UNIFOR) and dreaming of a doctorate in Portugal. More detailed information can be found on ",(0,t.jsx)("a",{href:"/docs/CleissonVieira.pdf",children:"my CV"}),"."]}),(0,t.jsx)("p",{children:"I am someone who loves the dev life \u2764\ufe0f, who is not afraid of clients and users demand and always disposes to help other. I want live in Portugal and only with my actual job is a harden process, so I searching a job opportunity with visa support to there."}),(0,t.jsxs)("p",{children:["Here some technologies that I has knowledge:",(0,t.jsxs)("ul",{className:i().ul_justifed,children:[(0,t.jsx)("li",{children:"\u2615  Java (JSF, Hibernate, Springboot)"}),(0,t.jsx)("li",{children:"\ud83d\udcdc NodeJS (ReactJS, Express, Mongoose, Grunt)"}),(0,t.jsx)("li",{children:"\ud83d\udc0d Python (Flask, Django)"}),(0,t.jsx)("li",{children:"\ud83d\uddc4\ufe0f Databases (Postgres, MongoDB, Redis, SQLite)"}),(0,t.jsx)("li",{children:"\ud83c\udf10 HTML,CSS,JS"}),(0,t.jsx)("li",{children:"\u2699\ufe0f Devops (GitLab CI, Docker, Kubernetes, Google Cloud Plataform)"})]})]})]}),(0,t.jsx)("hr",{}),(0,t.jsx)("h1",{className:i().title,children:"CONTACT"}),(0,t.jsxs)("p",{className:i().description,children:[(0,t.jsx)("span",{children:"There many ways to communicate with me, some more frequently than others."}),(0,t.jsx)("h4",{children:"Emails:"}),(0,t.jsxs)("ul",{className:i().ul_justifed,children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"mail_to:cleissonvb@gmail.com",children:"cleissonvb@gmail.com"})," > it is my main email, also can call me on Hangouts"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"mail_to:ryusei-kenragna@hotmail.com",children:"ryusei-kenragna@hotmail.com"})," > this is my account from the late MSN, but still working and is accessed to check some offers and promotions."]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"mail_to:kreyzon@outlook.com",children:"kreyzon@outlook.com"})," > a new Outlook email for migrate some contacts on email above"]})]}),(0,t.jsx)("h4",{children:"Social Medias:"}),(0,t.jsxs)("ul",{className:i().ul_justifed,children:[(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"http://www.facebook.com/cleissonvb",children:"Facebook"})," > for personal contact and if you want to be my friend"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"http://www.twitter.com/kreyzon",children:"Twitter"})," > @kreyzon for mentions"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://www.linkedin.com/in/cleisson-vieira-054a9268",children:"LinkedIn"})," > for professional profile"]}),(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://www.researchgate.net/profile/Cleisson_Barbosa",children:"ResearchGate"})," > for researcher profile"]})]})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",max:"Home_max__8QQm5",card:"Home_card___LpL1",logo:"Home_logo__27_tb",fadeIn:"Home_fadeIn__rYUMu",modal:"Home_modal__UJa3D",modal_content:"Home_modal_content__mE_j2",animatetop:"Home_animatetop__ODqGD",close:"Home_close__5x4RM",modal_header:"Home_modal_header__m9Bej",modal_body:"Home_modal_body__YfP49",modal_footer:"Home_modal_footer__Amh_g",description_indent:"Home_description_indent__O6pMa",ul_justifed:"Home_ul_justifed__dQyx3"}},9202:function(e){e.exports={nav:"navbar_nav__t3TC8"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=3269,e(e.s=n);var n}));var n=e.O();_N_E=n}]);