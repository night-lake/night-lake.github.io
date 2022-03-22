(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var c=i.apply(null,n);c&&e.push(c)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var l in n)r.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(9232)}])},90:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(1664),o=n(9583);function c(){return(0,r.jsx)(i.default,{href:"/",passHref:!0,children:(0,r.jsx)("a",{className:"text-md mb-3 cursor-pointer font-medium text-pink-500 hover:text-pink-600",children:(0,r.jsxs)("div",{className:"w-1/4",children:[(0,r.jsx)("span",{className:"inline-block pr-2 align-middle hover:text-pink-600",children:(0,r.jsx)(o.x_l,{})}),(0,r.jsx)("span",{className:" inline-block align-middle",children:"Go Back"})]})})})}},7576:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),i=n(4184),o=n.n(i);function c(e){var t=e.title,n=e.children,i=e.topMargin,c=void 0!==i&&i;return(0,r.jsxs)("section",{className:o()({"mb-4":!c,"my-4":c}),children:[(0,r.jsx)("h2",{className:"text-xl font-medium dark:text-white",children:t}),(0,r.jsx)("div",{className:"mt-4",children:n})]})}},4069:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893),i=n(7294),o=n(9583),c=n(7735),l=n(7576),a=n(4184),s=n.n(a);function u(e){return(0,r.jsxs)("button",{className:"group flex flex-col items-center transition-all",onClick:function(){return e.set(e.title.toLowerCase())},children:[(0,r.jsx)(e.icon,{title:e.title,className:s()("text-2xl transition-all group-hover:text-pink-500",{"text-gray-600 dark:text-gray-300":e.title.toLowerCase()!==e.get,"text-pink-600":e.title.toLowerCase()===e.get})}),(0,r.jsx)("p",{className:s()("font-medium transition-all group-hover:text-pink-500",{"text-gray-600 dark:text-gray-300":e.title.toLowerCase()!==e.get,"text-pink-600":e.title.toLowerCase()===e.get}),children:e.title})]})}function d(e){return(0,r.jsxs)("li",{className:"flex items-center rounded-xl bg-white p-4 shadow-md dark:bg-neutral-800/80 dark:text-white",children:[(0,r.jsx)(e.icon,{className:"text-3xl"}),(0,r.jsx)("p",{className:"pl-2 font-medium",children:e.name})]})}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function x(){var e=(0,i.useState)("frontend"),t=e[0],n=e[1],a=[{title:"Frontend",icon:o.ssk},{title:"Backend",icon:o.i1q},{title:"DevOps",icon:o.H_w},{title:"Tools",icon:o.KOq}],s={frontend:[{name:"Next.js",icon:c.Xou},{name:"React",icon:c.pNp},{name:"TailwindCSS",icon:c.YnA},{name:"TypeScript",icon:c.WZi},{name:"CSS",icon:c.H5g}],backend:[{name:"Node.js",icon:c.uds},{name:"TypeScript",icon:c.WZi},{name:"PostgreSQL",icon:c.u4B}],devops:[{name:"Github Actions",icon:c.Mil}],tools:[{name:"Git",icon:c.zS0}]}[t];return(0,r.jsxs)(l.Z,{title:"Stuff I know",children:[(0,r.jsx)("div",{className:"mb-2 flex flex-row space-x-4",children:a.map((function(e){return(0,r.jsx)(u,m({set:n,get:t},e),e.title)}))}),(0,r.jsx)("ul",{className:"grid gap-2 py-2 lg:grid-cols-2 xl:grid-cols-4 ",children:s.map((function(e){return(0,i.createElement)(d,m({},e,{key:e.name}))}))})]})}},9232:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(7294),o=n(9008),c=n(9583);function l(e){var t=e.title,n=e.children;return(0,r.jsxs)("section",{className:"py-4",children:[(0,r.jsx)("h2",{className:"text-xl font-medium dark:text-white",children:t}),(0,r.jsx)("section",{className:"mt-4 rounded-xl bg-white p-2 dark:bg-neutral-800",children:n})]})}var a=n(90);function s(e){var t;return(0,r.jsxs)("div",{className:"flex flex-row content-center items-center space-x-2 py-2",children:[(0,r.jsx)(e.icon,{className:"text-xl text-gray-600 dark:text-gray-300"}),(0,r.jsx)("h3",{className:"font-bold text-pink-500",children:e.title}),(0,r.jsx)("p",{className:"text-md font-medium text-gray-800 dark:text-gray-300",children:e.content.sort((function(e,t){return e<t?-1:e>t?1:0})).join(null!==(t=e.joinKey)&&void 0!==t?t:", ")})]})}var u=n(4069),d=n(7469);function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){var e=[{title:"Who Am I?",content:[{title:"Names",icon:c.SV_,content:["Sadie","Scarlett","Skye"]},{title:"Pronouns",icon:c.YxP,content:["She","They"],joinKey:"/"},{title:"Attraction Layer Cake",icon:c.ArU,content:["rC5"],joinKey:""}]},{title:"Words",content:[{title:"Yes",icon:c.$0H,content:["Ms","No Honorific","Girl","Sis"]},{title:"Ok",icon:c.spm,content:["Boo","Kissmate","Beloved"]},{title:"Jokingly",icon:c.MXl,content:["Pretty","Cute"]},{title:"Only if we're close",icon:c.I$,content:["Wife","Girlfriend"]}]}];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Sadie Mae Katherine"}),(0,r.jsx)("meta",{name:"description",content:d.C})]}),(0,r.jsx)(a.Z,{}),e.map((function(e){return(0,r.jsx)(l,{title:e.title,children:e.content.map((function(e){return(0,i.createElement)(s,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}({},e,{key:e.title}))}))},e.title)})),(0,r.jsx)(u.Z,{})]})}}},function(e){e.O(0,[415,774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);