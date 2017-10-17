webpackJsonp([12],{145:function(e,t,n){var o=n(43)(n(185),n(242),null,null);o.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\webpack\\cli\\element.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] element.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{}}},223:function(e,t,n){e.exports=n.p+"3ee8fa83af095bc875a8d3dfad9c6ce3.png"},224:function(e,t,n){e.exports=n.p+"dbf59e29420ec4afdadd2409fe06afad.png"},242:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wui-content"},[o("h1",[e._v("与element结合")]),e._v(" "),o("div",{staticClass:"site-text"},[o("h3",[e._v("安装element-ui")]),e._v(" "),o("p",{staticClass:"layui-bg-green wui-p10"},[e._v("npm i element-ui -S")]),e._v(" "),o("h3",[e._v("引入element-ui")]),e._v(" "),o("h4",[e._v("完整引入,在main.js入口文件中全局引入")]),e._v(" "),o("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("import Vue from 'vue'\nimport ElementUI from 'element-ui'\nimport 'element-ui/lib/theme-default/index.css'\n\nimport App from './App'\nimport router from './router'\n\nVue.use(ElementUI)\nVue.config.productionTip = false\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  router,\n  template: '"),o("App"),e._v("',\n  components: { App }\n})")],1),e._v(" "),o("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n                如果您的项目需要引入多个ui,也可以在*.vue文件中单独引入,\n            ")]),e._v(" "),o("img",{attrs:{src:n(224),alt:""}}),e._v(" "),o("h4",[e._v("按需引用")]),e._v(" "),o("p",[e._v("借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),e._v(" "),o("p",{staticClass:"layui-bg-green wui-p10"},[e._v("npm install babel-plugin-component -D")]),e._v(" "),o("p",[e._v("然后，将 .babelrc 修改为：")]),e._v(" "),o("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v('{\n  "presets": [\n    ["es2015", { "modules": false }]\n  ],\n  "plugins": [["component", [\n    {\n      "libraryName": "element-ui",\n      "styleLibraryName": "theme-default"\n    }\n  ]]]\n}')]),e._v(" "),o("p",[e._v("引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：")]),e._v(" "),o("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("import Vue from 'vue'\nimport { Button, Select } from 'element-ui'\nimport App from './App.vue'\n\nVue.component(Button.name, Button)\nVue.component(Select.name, Select)\n/* 或写为\n * Vue.use(Button)\n * Vue.use(Select)\n */\n\nnew Vue({\n  el: '#app',\n  render: h => h(App)\n})")]),e._v(" "),o("img",{attrs:{src:n(223),alt:""}})])])},staticRenderFns:[]},e.exports.render._withStripped=!0}});