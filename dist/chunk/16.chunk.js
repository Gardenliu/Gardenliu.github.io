webpackJsonp([16],{102:function(t,e,s){function i(t){for(var e=0;e<t.length;e++){var s=t[e],i=p[s.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](s.parts[r]);for(;r<s.parts.length;r++)i.parts.push(n(s.parts[r]));i.parts.length>s.parts.length&&(i.parts.length=s.parts.length)}else{for(var a=[],r=0;r<s.parts.length;r++)a.push(n(s.parts[r]));p[s.id]={id:s.id,refs:1,parts:a}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function n(t){var e,s,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(v)return _;i.parentNode.removeChild(i)}if(h){var n=d++;i=u||(u=r()),e=a.bind(null,i,n,!1),s=a.bind(null,i,n,!0)}else i=r(),e=o.bind(null,i),s=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else s()}}function a(t,e,s,i){var r=s?"":i.css;if(t.styleSheet)t.styleSheet.cssText=g(e,r);else{var n=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(n,a[e]):t.appendChild(n)}}function o(t,e){var s=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(s+="\n/*# sourceURL="+r.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=s(103),p={},f=l&&(document.head||document.getElementsByTagName("head")[0]),u=null,d=0,v=!1,_=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,s){v=s;var r=c(t,e);return i(r),function(e){for(var s=[],n=0;n<r.length;n++){var a=r[n],o=p[a.id];o.refs--,s.push(o)}e?(r=c(t,e),i(r)):r=[];for(var n=0;n<s.length;n++){var o=s[n];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete p[o.id]}}}};var g=function(){var t=[];return function(e,s){return t[e]=s,t.filter(Boolean).join("\n")}}()},103:function(t,e){t.exports=function(t,e){for(var s=[],i={},r=0;r<e.length;r++){var n=e[r],a=n[0],o=n[1],l=n[2],c=n[3],p={id:t+":"+r,css:o,media:l,sourceMap:c};i[a]?i[a].parts.push(p):s.push(i[a]={id:a,parts:[p]})}return s}},138:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{}}},163:function(t,e,s){e=t.exports=s(3)(),e.push([t.i,"\n.height-static > li[data-v-2c8989be] {height: 166px;box-sizing: border-box\n}\n.height-static > li > .first[data-v-2c8989be]{height: 60px\n}\n",""])},209:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wui-content"},[s("fieldset",{staticClass:"layui-elem-field layui-field-title site-title"},[s("legend",[s("a",{attrs:{name:"color-design"}},[t._v("字体")])])]),t._v(" "),s("ul",{staticClass:"site-doc-color"},[s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticStyle:{"font-size":"30px"}},[t._v("微软雅黑")])])]),t._v(" "),s("fieldset",{staticClass:"layui-elem-field layui-field-title site-title"},[s("legend",[s("a",{attrs:{name:"color-design"}},[t._v("字号")])])]),t._v(" "),s("ul",{staticClass:"site-doc-color height-static"},[s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticClass:"first",staticStyle:{"font-size":"40px"}},[t._v("文字")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("字号:40px")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("突出提醒的大标题")])]),t._v(" "),s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticClass:"first",staticStyle:{"font-size":"24px"}},[t._v("文字")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("字号:24px")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("数据统计中的数字显示")])]),t._v(" "),s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticClass:"first",staticStyle:{"font-size":"18px"}},[t._v("文字")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("字号:18px")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("主按钮上的文字")])]),t._v(" "),s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticClass:"first",staticStyle:{"font-size":"16px"}},[t._v("文字")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("字号:16px")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("菜单文字")])]),t._v(" "),s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticClass:"first",staticStyle:{"font-size":"14px"}},[t._v("文字")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("字号:14px")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("普通按钮,标题文字")])]),t._v(" "),s("li",{staticStyle:{"background-color":"#f5f5f5"}},[s("p",{staticClass:"first",staticStyle:{"font-size":"12px"}},[t._v("文字")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("字号:12px")]),t._v(" "),s("p",{attrs:{tips:""}},[t._v("正文,备注,标签")])])])])}]},t.exports.render._withStripped=!0},243:function(t,e,s){var i=s(163);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(102)("336bf25e",i,!1)},80:function(t,e,s){s(243);var i=s(22)(s(138),s(209),"data-v-2c8989be",null);i.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\pc\\basic\\font.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] font.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports}});