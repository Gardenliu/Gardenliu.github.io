webpackJsonp([9],{144:function(e,t,s){var n=s(43)(s(184),s(245),null,null);n.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\webpack\\cli\\code.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] code.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},184:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{}}},225:function(e,t,s){e.exports=s.p+"6c3e31cfbaa6d2f7f607a08a2e611429.png"},226:function(e,t,s){e.exports=s.p+"c87d35027558facc412c30dbd9f8a454.png"},227:function(e,t,s){e.exports=s.p+"646dd3c504b3884b699611cb1b197eff.png"},245:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wui-content"},[n("h1",[e._v("命令")]),e._v(" "),n("div",{staticClass:"site-text"},[n("p",[e._v("进入项目目录（cd Vue-Project），使用 cnpm 安装依赖")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("cnpm install")]),e._v(" "),n("p",[e._v("启动项目")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("npm run dev")]),e._v(" "),n("p",[e._v("项目首页")]),e._v(" "),n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n                启动项目后,显示如下,说明项目已经启动成功,"),n("br"),e._v("\n                在dev环境下,更改代码实时显示到页面中,在浏览器调试工具console;soure中,可以查看源文件中的代码,并打断点调试,而不是打包后的代码\n            ")]),e._v(" "),n("img",{attrs:{src:s(227),alt:"",width:"300"}}),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("如果浏览器打开之后，没有加载出页面，有可能是本地的 8080 端口被占用，需要修改一下配置文件 config>index.js")]),e._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("module.exports = {\n  build: {\n    env: require('./prod.env'),\n    index: path.resolve(__dirname, '../dist/index.html'),\n    assetsRoot: path.resolve(__dirname, '../dist'),\n    assetsSubDirectory: 'static',\n    assetsPublicPath: '/',              //打包后的文件路径\n    productionSourceMap: true,\n    productionGzip: false,\n    productionGzipExtensions: ['js', 'css'],\n    bundleAnalyzerReport: process.env.npm_config_report\n  },\n  dev: {\n    env: require('./dev.env'),\n    port: process.env.PORT || 9090,     //修改端口号\n    autoOpenBrowser: true,\n    assetsSubDirectory: 'static',\n    assetsPublicPath: '/',\n    proxyTable: {},\n    cssSourceMap: false\n  }\n}")]),e._v(" "),n("blockquote",{staticClass:"layui-elem-quote"},[e._v("\n                建议将端口号改为不常用的端口。"),n("br"),e._v("\n                另外建议将 build 的路径前缀修改为 ' ./ '（原本为 ' / '），是因为打包之后，外部引入 js 和 css 文件时，如果路径以 ' / ' 开头，在本地是无法找到对应文件的（服务器上没问题）。所以如果需要在本地打开打包后的文件，就得修改文件路径。\n            ")]),e._v(" "),n("p",[e._v("打包项目")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("npm run build")]),e._v(" "),n("p",[e._v("项目打包后,在dist文件夹中出现打包的项目文件及静态资源文件,具体请查看--项目结构")]),e._v(" "),n("p",[e._v("代码eslint监测")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("npm run lint")]),e._v(" "),n("p",[e._v("在dev环境中,cli会主动提示代码是否符合规范,并把错误信息显示到主体页面中")]),e._v(" "),n("img",{attrs:{src:s(226),alt:""}}),e._v(" "),n("p",{staticClass:"wui-pt20"},[e._v("运行npm run lint 命令,系统将检测代码规范,并显示在终端显示器中")]),e._v(" "),n("img",{attrs:{src:s(225),alt:""}}),e._v(" "),n("p",{staticClass:"wui-pt20"},[e._v("单元测试")]),e._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[e._v("npm run e2e")])])])}]},e.exports.render._withStripped=!0}});