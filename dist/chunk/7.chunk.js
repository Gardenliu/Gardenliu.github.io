webpackJsonp([7],{101:function(e,t,n){function s(e){for(var t=0;t<e.length;t++){var n=e[t],s=u[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(i(n.parts[o]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(i(n.parts[o]));u[n.id]={id:n.id,refs:1,parts:r}}}}function o(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function i(e){var t,n,s=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(s){if(f)return m;s.parentNode.removeChild(s)}if(h){var i=v++;s=d||(d=o()),t=r.bind(null,s,i,!1),n=r.bind(null,s,i,!0)}else s=o(),t=a.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}function r(e,t,n,s){var o=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function a(e,t){var n=t.css,s=t.media,o=t.sourceMap;if(s&&e.setAttribute("media",s),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(102),u={},p=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,v=0,f=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){f=n;var o=l(e,t);return s(o),function(t){for(var n=[],i=0;i<o.length;i++){var r=o[i],a=u[r.id];a.refs--,n.push(a)}t?(o=l(e,t),s(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var _=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},102:function(e,t){e.exports=function(e,t){for(var n=[],s={},o=0;o<t.length;o++){var i=t[o],r=i[0],a=i[1],c=i[2],l=i[3],u={id:e+":"+o,css:a,media:c,sourceMap:l};s[r]?s[r].parts.push(u):n.push(s[r]={id:r,parts:[u]})}return n}},104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),o=n.n(s),i=null;t.default={data:function(){return{code:""}},methods:{onCopy:function(e){var t=this;i&&i.destroy(),i=new o.a(".btn_copy",{text:function(){return t.$slots.default[0].text}}),i.on("success",function(e){t.$message({message:"复制成功!",type:"success"}),e.clearSelection()}),i.on("error",function(e){t.$message("复制失败!")})}},mounted:function(){}}},105:function(e,t,n){t=e.exports=n(3)(),t.push([e.i,"\n.copy[data-v-6615eeab]{\n    position: relative;\n    overflow: hidden;\n    z-index: 1;\n}\n.btn_copy[data-v-6615eeab]{\n    position: absolute;\n    right: 10px;\n    top: 15px;\n    z-index: 10;\n}\n",""])},106:function(e,t,n){n(108);var s=n(22)(n(104),n(107),"data-v-6615eeab",null);s.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\libs\\plugs\\code.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] code.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},107:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"copy"},[n("el-button",{staticClass:"btn_copy",attrs:{type:"success",size:"mini"},on:{click:e.onCopy}},[e._v("\n        Copy\n    ")]),e._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._t("default")],2)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},108:function(e,t,n){var s=n(105);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(101)("1079d709",s,!1)},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),o=(n.n(s),n(106)),i=n.n(o);t.default={components:{iCode:i.a},data:function(){return{}},methods:{}}},211:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wui-content"},[n("h2",[e._v("安装")]),e._v(" "),n("h3",[e._v("npm安装")]),e._v(" "),n("div",{staticClass:"site-text"},[n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n                适用于webpack打包的页面app应用\n            ")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("请参见 '工具->webpack->与elements结合'")]),e._v(" "),n("p",[e._v("主题安装")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("$ npm install cjl-ui --save")]),e._v(" "),n("p",[e._v("使用")]),e._v(" "),n("i-code",[e._v("import 'cjl-ui/index.css'\nimport ElementUI from 'element-ui'")])],1),e._v(" "),n("h3",[e._v("CDN")]),e._v(" "),n("div",{staticClass:"site-text"},[n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n                适用于单页面开发\n            ")]),e._v(" "),n("p",[e._v("目前可以通过 cdn 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。")]),e._v(" "),n("i-code",[e._v('\x3c!-- 引入样式 --\x3e\n<link rel="stylesheet" href="http://static.vyying.com/inter/css/cjl/component/1.0.0/cjl.min.css">\n\x3c!-- 引入组件库 --\x3e\n<script src="http://static.vyying.com/inter/script/cjl/component/1.0.0/cjl.min.js"><\/script>')]),e._v(" "),n("p",[e._v("cjl.min.js为纯净的组件库,不包含css主题样式,引入时务必引入主题样式")])],1),e._v(" "),n("h2",[e._v("Hellow World")]),e._v(" "),n("div",{staticClass:"site-text"},[n("i-code",[e._v('<!DOCTYPE html>\n<html lang="zh-CN">\n\n<head>\n    <title>前端工具</title>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;">\n    <link rel="stylesheet" href="http://static.vyying.com/inter/css/cjl/component/1.0.0/cjl.min.css">\n</head>\n\n<body>\n<div id="app">\n    <el-button @click="open">你好</el-button>\n</div>\n<script src="https://cdn.bootcss.com/vue/2.3.4/vue.min.js"><\/script>\n<script src="http://static.vyying.com/inter/script/cjl/component/1.0.0/cjl.min.js"><\/script>\n<script>\nnew Vue({\n    el:\'#app\',\n    data:{\n        a:\'hello\'\n    },\n    methods: {\n        open() {\n            this.$alert(\'Hello World\', \'标题名称\', {\n                confirmButtonText: \'确定\',\n                callback: action => {\n                    this.$message({\n                        type: \'info\',\n                        message: `欢迎使用`\n                    });\n                }\n            });\n        }\n    }\n});\n<\/script>\n</body>\n\n</html>')])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},86:function(e,t,n){var s=n(22)(n(143),n(211),null,null);s.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\pc\\install.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] install.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports}});