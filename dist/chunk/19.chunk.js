webpackJsonp([19],{132:function(e,t,s){var n=s(43)(s(172),s(255),null,null);n.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\guide\\name\\dir.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] dir.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},172:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{}}},255:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wui-content"},[s("h2",[e._v("目录规范")]),e._v(" "),s("h3",[e._v("pc端")]),e._v(" "),s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("依据之前项目中已用的目录名称(项目从svn上update后,找到静态文件目录)")]),e._v(" "),s("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n            项目静态文件夹：projectname\\src\\main\\webapp\\static"),s("br"),s("br"),e._v("\n            样式文件夹：css"),s("br"),s("br"),e._v("\n            脚本文件夹：js"),s("br"),s("br"),e._v("\n            样式类图片文件夹：images\n        ")]),e._v(" "),s("h2",[e._v("小程序模块(git上目录规范)")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("小程序的目录规范请参看微信小程序官方规定,下文只说明git上每个模块的目录结构")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("├── vender                    插件目录\n|   ├── wxapp-center            功能模块(命名规则:wxapp-xxxx)\n|   |   ├── assets              页面素材包(命名规则:assets)\n|   |   |    ├── components         组件单元(命名规则:components)\n|   |   |    |      ├── formDate    组件命名(命名规则:遵守驼峰命名规则)\n|   |   |    |      ├── address     ...\n|   |   |    ├── images             图片素材(命名规则:images)\n|   |   |    └── style              样式素材(命名规则:style)\n|   |   ├── pages               模块页面(命名规则:pages)\n|   |   |    ├── orderDetail        页面目录(命名规则:遵守驼峰命名规则)\n|   |   |    ├── ....\n|   |   └── utils               功能插件(命名规则:utils)\n|   └── wxapp-...\n├── app.js                      小程序入口文件(需要自行添加)\n├── app.json                    小程序全局配置(配置商城模块页面)\n├── app.wxss                    小程序全局样式\n└── config.js                   小程序项目配置文件(配置商城模块功能)")])])])}]},e.exports.render._withStripped=!0}});