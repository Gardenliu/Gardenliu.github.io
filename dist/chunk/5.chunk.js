webpackJsonp([5],{137:function(e,t,n){n(225);var r=n(43)(n(170),n(206),"data-v-4f480872",null);r.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\postman\\home.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},145:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=l[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(s(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(s(n.parts[o]));l[n.id]={id:n.id,refs:1,parts:a}}}}function o(){var e=document.createElement("style");return e.type="text/css",c.appendChild(e),e}function s(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var s=f++;r=p||(p=o()),t=a.bind(null,r,s,!1),n=a.bind(null,r,s,!0)}else r=o(),t=i.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var s=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(s,a[t]):e.appendChild(s)}}function i(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(146),l={},c=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=d(e,t);return r(o),function(t){for(var n=[],s=0;s<o.length;s++){var a=o[s],i=l[a.id];i.refs--,n.push(i)}t?(o=d(e,t),r(o)):o=[];for(var s=0;s<n.length;s++){var i=n[s];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete l[i.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},146:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var s=t[o],a=s[0],i=s[1],u=s[2],d=s[3],l={id:e+":"+o,css:i,media:u,sourceMap:d};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}},170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{handleStart:function(){this.$Modal.info({title:"Bravo",content:"Now, enjoy the convenience of iView."})}}}},184:function(e,t,n){t=e.exports=n(19)(),t.push([e.i,"\n.index[data-v-4f480872]{\n        overflow: hidden;\n        height: 50px;\n}\n.grid-content[data-v-4f480872] {\n        border-radius: 4px;\n        min-height: 36px;\n}\n.bg-purple[data-v-4f480872]{\n    background: #d3dce6;\n}\n",""])},206:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wui-content"},[n("h1",[e._v("webpack概述")]),e._v(" "),n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n        webpack 是一个模块打包工具。它使得模块相互依赖并且可构建等价于这些模块的静态资源。相比于已经存在的模块打包器（module bundler），webpack的开发动机是实现代码分包（Code Splitting ）和通过模块化完成代码的无缝集成。webpack可以根据项目需求合并代码，并且支持按需加载。\n    ")]),e._v(" "),n("h1",[e._v("webpack的实现目标")]),e._v(" "),n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n        拆分依赖树（dependency tree）为多个按需加载的chunk"),n("br"),e._v("\n        保证快速首屏加载"),n("br"),e._v("\n        每种静态资源都可成为模块"),n("br"),e._v("\n        能够将第三方库视作一个模块来处理"),n("br"),e._v("\n        能够定制模块打包器的几乎任何部分"),n("br"),e._v("\n        适合大型项目\n    ")]),e._v(" "),n("h1",[e._v("其他")]),e._v(" "),n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n        安装,项目搭建,请参见网上的教程,more lang more lang .....\n    ")])])}]},e.exports.render._withStripped=!0},225:function(e,t,n){var r=n(184);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(145)("8c375d6a",r,!1)}});