webpackJsonp([7],{135:function(e,t,n){n(257);var r=n(43)(n(174),n(227),"data-v-05aa7664",null);r.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},150:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],o=0;o<n.parts.length;o++)i.push(a(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:i}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function a(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(f)return h;r.parentNode.removeChild(r)}if(_){var a=v++;r=p||(p=o()),t=i.bind(null,r,a,!1),n=i.bind(null,r,a,!0)}else r=o(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function i(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function s(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(151),c={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,v=0,f=!1,h=function(){},_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var o=d(e,t);return r(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a],s=c[i.id];s.refs--,n.push(s)}t?(o=d(e,t),r(o)):o=[];for(var a=0;a<n.length;a++){var s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},151:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=a[0],s=a[1],u=a[2],d=a[3],c={id:e+":"+o,css:s,media:u,sourceMap:d};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{handleStart:function(){this.$Modal.info({title:"Bravo",content:"Now, enjoy the convenience of iView."})}}}},189:function(e,t,n){t=e.exports=n(19)(),t.push([e.i,"\n.index[data-v-05aa7664]{\n        overflow: hidden;\n        height: 50px;\n}\n.grid-content[data-v-05aa7664] {\n        border-radius: 4px;\n        min-height: 36px;\n}\n.bg-purple[data-v-05aa7664]{\n    background: #d3dce6;\n}\n",""])},227:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wui-content"},[n("h1",[e._v("概述")]),e._v(" "),n("p",[e._v("旨在增强团队的开发协作，提高代码质量和打造开发基石的编码风格规范，其中包含了 HTML, JavaScript 和 CSS/SCSS 这几个部分。我们知道，当一个团队开始指定并实行编码规范的话，错误就会变得更加显而易见。如果一段特定的代码不符合规范的话，它有可能只是代码风格错误，而也有可能会是 bug。早期指定规范就使得代码审核得以更好的开展，并且可以更精确的地定位到错误。只要开发者们能够保证源代码源文件都严格遵循规范，那接下去所使用的混淆、压缩和编译工具则可投其所好不尽相同")]),e._v(" "),n("h2",[e._v("关于")]),e._v(" "),n("p",[e._v("基于 W3C、苹果开发者 等官方文档，并结合团队日常业务需求以及团队在日常开发过程中总结提炼出的经验而制定。 旨在增强团队开发协作、提高代码质量和打造开发基石的编码规范， 以下规范是团队基本约定的内容，必须严格遵循。")]),e._v(" "),n("h3",[e._v("HTML规范")]),e._v(" "),n("p",[e._v("基于 W3C、苹果开发者 等官方文档，并结合团队业务和开发过程中总结的规范约定，让页面HTML代码更具语义性。")]),e._v(" "),n("h3",[e._v("图片规范")]),e._v(" "),n("p",[e._v("了解各种图片格式特性，根据特性制定图片规范，包括但不限于图片的质量约定、图片引入方式、图片合并处理等，旨在从图片层面优化页面性能。")]),e._v(" "),n("h3",[e._v("CSS规范")]),e._v(" "),n("p",[e._v("统一规范团队 CSS 代码书写风格和使用 CSS 预编译语言语法风格，提供常用媒体查询语句和浏览器私有属性引用，并从业务层面统一规范常用模块的引用。")]),e._v(" "),n("h3",[e._v("命名规范")]),e._v(" "),n("p",[e._v("从 目录、图片、HTML/CSS文件、ClassName 的命名等层面约定规范团队的命名习惯，增强团队代码的可读性。")]),e._v(" "),n("h3",[e._v("JavaScript 规范")]),e._v(" "),n("p",[e._v("统一团队的 JS 语法风格和书写习惯，减少程序出错的概率，其中也包含了 ES6 的语法规范和最佳实践")])])}]},e.exports.render._withStripped=!0},257:function(e,t,n){var r=n(189);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(150)("bbc4a624",r,!1)}});