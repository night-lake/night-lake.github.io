(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[610],{7921:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[id]",function(){return n(2703)}])},7276:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var r=n(5893),i=(Math.pow(10,8),36e5),a=n(3882),o=n(3946);var u={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},c=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){var t,n={},r=e.split(u.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],u.timeZoneDelimiter.test(n.date)&&(n.date=e.split(u.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var i=u.timezone.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}function f(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?i:100*a,restDateString:e.slice((r[1]||r[2]).length)}}function m(e,t){if(null===t)return new Date(NaN);var n=e.match(c);if(!n)return new Date(NaN);var r=!!n[4],i=p(n[1]),a=p(n[2])-1,o=p(n[3]),u=p(n[4]),l=p(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var i=r.getUTCDay()||7,a=7*(t-1)+n+1-i;return r.setUTCDate(r.getUTCDate()+a),r}(t,u,l):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(g[t]||(h(e)?29:28))}(t,a,o)&&function(e,t){return t>=1&&t<=(h(e)?366:365)}(t,i)?(s.setUTCFullYear(t,a,Math.max(i,o)),s):new Date(NaN)}function p(e){return e?parseInt(e):1}function v(e){var t=e.match(l);if(!t)return NaN;var n=w(t[1]),r=w(t[2]),a=w(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*i+6e4*r+1e3*a:NaN}function w(e){return e&&parseFloat(e.replace(",","."))||0}function N(e){if("Z"===e)return 0;var t=e.match(s);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*i+6e4*a):NaN}var g=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400===0||e%4===0&&e%100!==0}var x=n(5313),D=function(e){var t=e.dateString,n=e.className,i=function(e,t){(0,a.Z)(1,arguments);var n=t||{},r=null==n.additionalDigits?2:(0,o.Z)(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,u=d(e);if(u.date){var c=f(u.date,r);i=m(c.restDateString,c.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var l,s=i.getTime(),p=0;if(u.time&&(p=v(u.time),isNaN(p)))return new Date(NaN);if(!u.timezone){var w=new Date(s+p),g=new Date(0);return g.setFullYear(w.getUTCFullYear(),w.getUTCMonth(),w.getUTCDate()),g.setHours(w.getUTCHours(),w.getUTCMinutes(),w.getUTCSeconds(),w.getUTCMilliseconds()),g}return l=N(u.timezone),isNaN(l)?new Date(NaN):new Date(s+p+l)}(t);return(0,r.jsx)("time",{className:n,dateTime:t,children:(0,x.Z)(i,"LLLL d, yyyy")})}},736:function(e,t,n){"use strict";var r=n(5893),i=n(1664),a=n(9583);t.Z=function(){return(0,r.jsx)(i.default,{href:"/",passHref:!0,children:(0,r.jsx)("a",{className:"text-md mb-3 cursor-pointer font-medium text-pink-500 hover:text-pink-600",children:(0,r.jsxs)("div",{className:"w-1/4",children:[(0,r.jsx)("span",{className:"inline-block pr-2 align-middle hover:text-pink-600",children:(0,r.jsx)(a.x_l,{})}),(0,r.jsx)("span",{className:" inline-block align-middle",children:"Go Back"})]})})})}},2703:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return g},default:function(){return h}});var r={};n.r(r),n.d(r,{MDXContext:function(){return u},MDXProvider:function(){return d},useMDXComponents:function(){return l},withMDXComponents:function(){return c}});var i=n(5893),a=n.t(i,2),o=n(7294);const u=o.createContext({});function c(e){return function(t){const n=l(t.components);return o.createElement(e,{...t,allComponents:n})}}function l(e){const t=o.useContext(u);return o.useMemo((()=>"function"===typeof e?e(t):{...t,...e}),[t,e])}const s={};function d({components:e,children:t,disableParentContext:n}){let r=l(e);return n&&(r=e||s),o.createElement(u.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:u}){const[c,l]=(0,o.useState)(!u||"undefined"===typeof window);(0,o.useEffect)((()=>{if(u){const e=window.requestIdleCallback((()=>{l(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const s=(0,o.useMemo)((()=>{const i=Object.assign({opts:{...r,...a}},{frontmatter:t},n),o=Object.keys(i),u=Object.values(i),c=Reflect.construct(Function,o.concat(`${e}`));return c.apply(c,u).default}),[n,e]);if(!c)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const f=o.createElement(d,{components:i},o.createElement(s,null));return u?o.createElement("div",null,f):f}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=n(9008),p=n(7276),v=n(736);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}var g=!0,h=function(e){var t,n,r,a,o,u=e.source;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.default,{children:(0,i.jsx)("title",{children:null===(t=u.frontmatter)||void 0===t?void 0:t.postTitle})}),(0,i.jsx)(v.Z,{}),(0,i.jsxs)("section",{className:"py-4",children:[(0,i.jsx)("h1",{className:"text-2xl font-bold text-pink-500",children:null===(n=u.frontmatter)||void 0===n?void 0:n.postTitle}),(0,i.jsx)("p",{className:"mb-3 dark:text-white",children:null===(r=u.frontmatter)||void 0===r?void 0:r.description}),(0,i.jsx)("p",{className:"font-medium text-gray-600 dark:text-gray-400",children:(0,i.jsx)(p.Z,{dateString:null!==(o=null===(a=u.frontmatter)||void 0===a?void 0:a.date)&&void 0!==o?o:"1970-01-01"})})]}),(0,i.jsx)("article",{className:"prose dark:prose-invert",children:(0,i.jsx)(f,N({},u))})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=7921,e(e.s=t);var t}));var t=e.O();_N_E=t}]);