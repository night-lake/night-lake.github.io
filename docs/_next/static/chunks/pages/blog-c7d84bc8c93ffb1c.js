(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4184:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var u=a.apply(null,r);u&&t.push(u)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&t.push(s);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(e,[]))||(t.exports=r)}()},8420:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});Math.pow(10,8);var n=36e5,a=r(3882),i=r(3946);function u(t,e){(0,a.Z)(1,arguments);var r=e||{},n=null==r.additionalDigits?2:(0,i.Z)(r.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var u,s=d(t);if(s.date){var o=f(s.date,n);u=m(o.restDateString,o.year)}if(!u||isNaN(u.getTime()))return new Date(NaN);var l,c=u.getTime(),p=0;if(s.time&&(p=h(s.time),isNaN(p)))return new Date(NaN);if(!s.timezone){var g=new Date(c+p),N=new Date(0);return N.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),N.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),N}return l=v(s.timezone),isNaN(l)?new Date(NaN):new Date(c+p+l)}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(t){var e,r={},n=t.split(s.dateTimeDelimiter);if(n.length>2)return r;if(/:/.test(n[0])?e=n[0]:(r.date=n[0],e=n[1],s.timeZoneDelimiter.test(r.date)&&(r.date=t.split(s.timeZoneDelimiter)[0],e=t.substr(r.date.length,t.length))),e){var a=s.timezone.exec(e);a?(r.time=e.replace(a[1],""),r.timezone=a[1]):r.time=e}return r}function f(t,e){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(r);if(!n)return{year:NaN,restDateString:""};var a=n[1]?parseInt(n[1]):null,i=n[2]?parseInt(n[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((n[1]||n[2]).length)}}function m(t,e){if(null===e)return new Date(NaN);var r=t.match(o);if(!r)return new Date(NaN);var n=!!r[4],a=p(r[1]),i=p(r[2])-1,u=p(r[3]),s=p(r[4]),l=p(r[5])-1;if(n)return function(t,e,r){return e>=1&&e<=53&&r>=0&&r<=6}(0,s,l)?function(t,e,r){var n=new Date(0);n.setUTCFullYear(t,0,4);var a=n.getUTCDay()||7,i=7*(e-1)+r+1-a;return n.setUTCDate(n.getUTCDate()+i),n}(e,s,l):new Date(NaN);var c=new Date(0);return function(t,e,r){return e>=0&&e<=11&&r>=1&&r<=(N[e]||(x(t)?29:28))}(e,i,u)&&function(t,e){return e>=1&&e<=(x(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,u)),c):new Date(NaN)}function p(t){return t?parseInt(t):1}function h(t){var e=t.match(l);if(!e)return NaN;var r=g(e[1]),a=g(e[2]),i=g(e[3]);return function(t,e,r){if(24===t)return 0===e&&0===r;return r>=0&&r<60&&e>=0&&e<60&&t>=0&&t<25}(r,a,i)?r*n+6e4*a+1e3*i:NaN}function g(t){return t&&parseFloat(t.replace(",","."))||0}function v(t){if("Z"===t)return 0;var e=t.match(c);if(!e)return 0;var r="+"===e[1]?-1:1,a=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,i)?r*(a*n+6e4*i):NaN}var N=[31,null,31,30,31,30,31,31,30,31,30,31];function x(t){return t%400===0||t%4===0&&t%100!==0}},5423:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(1391)}])},4719:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(5893),a=r(8420),i=r(5313);function u(t){var e=t.dateString,r=t.className,u=(0,a.Z)(e);return(0,n.jsx)("time",{className:r,dateTime:e,children:(0,i.Z)(u,"LLLL d, yyyy")})}},90:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(5893),a=r(1664),i=r(9583);function u(){return(0,n.jsx)(a.default,{href:"/",passHref:!0,children:(0,n.jsx)("a",{className:"text-md mb-3 cursor-pointer font-medium text-pink-500 hover:text-pink-600",children:(0,n.jsxs)("div",{className:"w-1/4",children:[(0,n.jsx)("span",{className:"inline-block pr-2 align-middle hover:text-pink-600",children:(0,n.jsx)(i.x_l,{})}),(0,n.jsx)("span",{className:" inline-block align-middle",children:"Go Back"})]})})})}},8871:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(5893),a=r(1664),i=r(4719);function u(t){var e=t.post;return(0,n.jsx)(a.default,{href:"/blog/".concat(e.id),passHref:!0,children:(0,n.jsxs)("a",{className:"rounded-xl bg-white p-2 transition-all hover:shadow-md dark:bg-neutral-800/80 dark:shadow-lg",children:[(0,n.jsx)("h3",{className:"text-lg font-bold text-pink-500",children:e.title}),(0,n.jsx)("p",{className:"text-md pb-1 font-medium text-gray-800 dark:text-gray-200",children:e.description}),(0,n.jsx)(i.Z,{className:"text-gray-600 dark:text-gray-300",dateString:e.date})]})})}},7576:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=r(5893),a=r(4184),i=r.n(a);function u(t){var e=t.title,r=t.children,a=t.topMargin,u=void 0!==a&&a;return(0,n.jsxs)("section",{className:i()({"mb-4":!u,"my-4":u}),children:[(0,n.jsx)("h2",{className:"text-xl font-medium dark:text-white",children:e}),(0,n.jsx)("div",{className:"mt-4",children:r})]})}},1391:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return l},default:function(){return c}});var n=r(5893),a=r(90),i=r(8871),u=r(7576);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i=[],u=!0,s=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(o){s=!0,a=o}finally{try{u||null==r.return||r.return()}finally{if(s)throw a}}return i}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=!0;function c(t){var e=t.allPostsData.reduce((function(t,e){var r=0,n=o(e.date.split("-"),1)[0];return t.map((function(t){return t.year})).includes(n)?t[r].posts.push(e):(t.push({year:n,posts:[e]}),r++),t}),[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{}),e.map((function(t,e){return(0,n.jsx)(u.Z,{title:t.year,topMargin:0===e,children:(0,n.jsx)("ul",{className:"grid gap-2 lg:grid-cols-2 xl:grid-cols-3",children:t.posts.map((function(t){return(0,n.jsx)(i.Z,{post:t},t.id)}))})},e)}))]})}}},function(t){t.O(0,[774,888,179],(function(){return e=5423,t(t.s=e);var e}));var e=t.O();_N_E=e}]);