(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},8420:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});Math.pow(10,8);var r=36e5,i=n(3882),a=n(3946);function s(e,t){(0,i.Z)(1,arguments);var n=t||{},r=null==n.additionalDigits?2:(0,a.Z)(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var s,l=d(e);if(l.date){var o=f(l.date,r);s=x(o.restDateString,o.year)}if(!s||isNaN(s.getTime()))return new Date(NaN);var c,u=s.getTime(),m=0;if(l.time&&(m=p(l.time),isNaN(m)))return new Date(NaN);if(!l.timezone){var g=new Date(u+m),N=new Date(0);return N.setFullYear(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate()),N.setHours(g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds()),N}return c=h(l.timezone),isNaN(c)?new Date(NaN):new Date(u+m+c)}var l={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},o=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,c=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){var t,n={},r=e.split(l.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?t=r[0]:(n.date=r[0],t=r[1],l.timeZoneDelimiter.test(n.date)&&(n.date=e.split(l.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var i=l.timezone.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}function f(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};var i=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?i:100*a,restDateString:e.slice((r[1]||r[2]).length)}}function x(e,t){if(null===t)return new Date(NaN);var n=e.match(o);if(!n)return new Date(NaN);var r=!!n[4],i=m(n[1]),a=m(n[2])-1,s=m(n[3]),l=m(n[4]),c=m(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,l,c)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var i=r.getUTCDay()||7,a=7*(t-1)+n+1-i;return r.setUTCDate(r.getUTCDate()+a),r}(t,l,c):new Date(NaN);var u=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(N[t]||(j(e)?29:28))}(t,a,s)&&function(e,t){return t>=1&&t<=(j(e)?366:365)}(t,i)?(u.setUTCFullYear(t,a,Math.max(i,s)),u):new Date(NaN)}function m(e){return e?parseInt(e):1}function p(e){var t=e.match(c);if(!t)return NaN;var n=g(t[1]),i=g(t[2]),a=g(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,i,a)?n*r+6e4*i+1e3*a:NaN}function g(e){return e&&parseFloat(e.replace(",","."))||0}function h(e){if("Z"===e)return 0;var t=e.match(u);if(!t)return 0;var n="+"===t[1]?-1:1,i=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(i*r+6e4*a):NaN}var N=[31,null,31,30,31,30,31,31,30,31,30,31];function j(e){return e%400===0||e%4===0&&e%100!==0}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2122)}])},4719:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(8420),a=n(5313);function s(e){var t=e.dateString,n=e.className,s=(0,i.Z)(t);return(0,r.jsx)("time",{className:n,dateTime:t,children:(0,a.Z)(s,"LLLL d, yyyy")})}},8871:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(1664),a=n(4719);function s(e){var t=e.post;return(0,r.jsx)(i.default,{href:"/blog/".concat(t.id),passHref:!0,children:(0,r.jsxs)("a",{className:"rounded-xl bg-white p-2 transition-all hover:shadow-md dark:bg-neutral-800/80 dark:shadow-lg",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-pink-500",children:t.title}),(0,r.jsx)("p",{className:"text-md pb-1 font-medium text-gray-800 dark:text-gray-200",children:t.description}),(0,r.jsx)(a.Z,{className:"text-gray-600 dark:text-gray-300",dateString:t.date})]})})}},7991:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(9583),a=n(8989);function s(e){var t=e.project;return(0,r.jsxs)("li",{className:"flex flex-col content-center overflow-hidden rounded-xl bg-white p-2 transition-all dark:bg-neutral-800/90",children:[(0,r.jsx)("div",{className:"m-auto",children:(0,r.jsx)("img",{className:"h-48 w-48 rounded-full",alt:"",src:t.icon})}),(0,r.jsxs)("div",{className:"flex h-full grow flex-col items-stretch justify-between",children:[(0,r.jsxs)("div",{className:"flex-1 pb-2",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-pink-500",children:t.name}),(0,r.jsx)("p",{className:"text-md text-gray-800 dark:text-gray-300",children:t.description})]}),(0,r.jsxs)("div",{className:"flex flex-row content-center space-x-2 pb-2",children:[(0,r.jsx)(i.ArU,{title:"Tech Stack",className:"text-xl text-gray-600 dark:text-gray-300"}),(0,r.jsx)("p",{className:"text-md text-gray-800 dark:text-gray-300",children:t.tech.sort((function(e,t){return e<t?-1:e>t?1:0})).join(", ")})]}),(0,r.jsxs)("div",{className:"flex flex-row content-center justify-end space-x-2",children:[(0,r.jsx)(a.Z,{link:t.website,icon:(0,r.jsx)(i.ssk,{title:"".concat(t.name,"'s website"),className:"cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"})}),(0,r.jsx)(a.Z,{link:t.repo,icon:(0,r.jsx)(i.hJX,{title:"".concat(t.name,"'s repo"),className:"cursor-pointer text-2xl text-gray-600 transition-all hover:text-pink-600 dark:text-gray-300"})})]})]})]})}},7576:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),i=n(4184),a=n.n(i);function s(e){var t=e.title,n=e.children,i=e.topMargin,s=void 0!==i&&i;return(0,r.jsxs)("section",{className:a()({"mb-4":!s,"my-4":s}),children:[(0,r.jsx)("h2",{className:"text-xl font-medium dark:text-white",children:t}),(0,r.jsx)("div",{className:"mt-4",children:n})]})}},4069:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5893),i=n(7294),a=n(9583),s=n(7735),l=n(7576),o=n(4184),c=n.n(o);function u(e){return(0,r.jsxs)("button",{className:"group flex flex-col items-center transition-all",onClick:function(){return e.set(e.title.toLowerCase())},children:[(0,r.jsx)(e.icon,{title:e.title,className:c()("text-2xl transition-all group-hover:text-pink-500",{"text-gray-600 dark:text-gray-300":e.title.toLowerCase()!==e.get,"text-pink-600":e.title.toLowerCase()===e.get})}),(0,r.jsx)("p",{className:c()("font-medium transition-all group-hover:text-pink-500",{"text-gray-600 dark:text-gray-300":e.title.toLowerCase()!==e.get,"text-pink-600":e.title.toLowerCase()===e.get}),children:e.title})]})}function d(e){return(0,r.jsxs)("li",{className:"flex items-center rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800/80 dark:text-white",children:[(0,r.jsx)(e.icon,{className:"text-3xl"}),(0,r.jsx)("p",{className:"pl-2 font-medium",children:e.name})]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function m(){var e=(0,i.useState)("frontend"),t=e[0],n=e[1],o=[{title:"Frontend",icon:a.ssk},{title:"Backend",icon:a.i1q},{title:"DevOps",icon:a.H_w},{title:"Tools",icon:a.KOq}],c={frontend:[{name:"Next.js",icon:s.Xou},{name:"React",icon:s.pNp},{name:"TailwindCSS",icon:s.YnA},{name:"TypeScript",icon:s.WZi},{name:"CSS",icon:s.H5g}],backend:[{name:"Node.js",icon:s.uds},{name:"TypeScript",icon:s.WZi},{name:"PostgreSQL",icon:s.u4B}],devops:[{name:"Github Actions",icon:s.Mil}],tools:[{name:"Git",icon:s.zS0}]}[t];return(0,r.jsxs)(l.Z,{title:"Stuff I know",children:[(0,r.jsx)("div",{className:"mb-2 flex flex-row space-x-4",children:o.map((function(e){return(0,r.jsx)(u,x({set:n,get:t},e),e.title)}))}),(0,r.jsx)("ul",{className:"grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4 ",children:c.map((function(e){return(0,i.createElement)(d,x({},e,{key:e.name}))}))})]})}},2122:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return p}});var r=n(5893),i=n(9008),a=n(8871),s=n(7991),l=n(7576),o=n(1664),c=n(9583);function u(e){var t=e.url;return(0,r.jsx)(o.default,{href:t,passHref:!0,children:(0,r.jsxs)("a",{className:"text-md cursor-pointer font-medium text-pink-500 hover:text-pink-600",children:[(0,r.jsx)("span",{className:"inline-block align-middle hover:text-pink-600",children:"See more"}),(0,r.jsx)("span",{className:"inline-block pl-2 align-middle hover:text-pink-600",children:(0,r.jsx)(c.Z1Y,{})})]})})}var d=n(4069),f=n(7469);function x(e){return e.reduce((function(e,t,n){var r=Math.floor(n/3);return e[r]||(e[r]=[]),e[r].push(t),e}),[])}var m=!0;function p(e){var t=e.posts,n=e.projects,o=x(t),c=x(n);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Sadie Mae Katherine"}),(0,r.jsx)("meta",{name:"description",content:f.C})]}),(0,r.jsxs)(l.Z,{title:"Projects",children:[(0,r.jsx)("ul",{className:"mb-4 grid gap-2 lg:grid-cols-2 xl:grid-cols-3",children:c[0].map((function(e){return(0,r.jsx)(s.Z,{project:e},e.name)}))}),(0,r.jsx)(u,{url:"/projects"})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(l.Z,{title:"Recent Posts",children:[(0,r.jsx)("ul",{className:"mb-4 grid gap-2 lg:grid-cols-2 xl:grid-cols-3",children:o[0].map((function(e){return(0,r.jsx)(a.Z,{post:e},e.id)}))}),(0,r.jsx)(u,{url:"/blog"})]})]})}}},function(e){e.O(0,[415,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);