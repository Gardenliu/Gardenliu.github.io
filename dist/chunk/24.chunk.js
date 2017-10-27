webpackJsonp([24],{100:function(e,t,s){var n=s(22)(s(157),s(229),null,null);n.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\webpack\\webpack\\config.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] config.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},157:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{}}},229:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wui-content"},[s("h2",[e._v("配置样例")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",[e._v("为了方便摘取，和补全文章中用于示例的代码片段，特将配置文件整理如下，")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("const path = require('path');\nconst webpack = require('webpack');\n\nmodule.exports = {\n    entry: {\n        main: './src/main',\n        vendors: './src/vendors'\n    },\n    output: {\n        path: path.join(__dirname, './dist')\n    },\n    externals: {\n        'vue': 'Vue'\n    },\n    module: {\n        rules: [\n            {\n                test: /\\.vue$/,\n                loader: 'vue-loader'\n            },\n            {\n                test: /iview\\/.*?js$/,\n                loader: 'babel-loader'\n            },\n            {\n                test: /\\.js$/,\n                loader: 'babel-loader',\n                exclude: /node_modules/\n            },\n            {\n                test: /\\.css$/,\n                loader: 'style-loader!css-loader'\n            },\n            {\n                test: /\\.(gif|jpg|png|woff|svg|eot|ttf)\\??.*$/,\n                loader: 'url-loader?limit=1024'\n            },\n            {\n                test: /\\.(html|tpl)$/,\n                loader: 'html-loader'\n            }\n        ]\n    },\n    resolve: {\n        extensions: ['.js', '.vue'],\n        alias: {\n            'vue': 'vue/dist/vue.esm.js'\n        }\n    }\n};")]),e._v(" "),s("p",[e._v("下面内容,将对配置参数做对应说明")])]),e._v(" "),s("h2",[e._v("设置入口")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",[e._v("字符串")]),e._v(" "),s("p",{staticClass:"layui-bg-green wui-p10"},[e._v('entry: "./index/index.js" ：配置模块会被解析为模块，并在启动时加载。chunk名为默认为main， 具体打包文件名视output配置而定。')]),e._v(" "),s("p",[e._v("数组")]),e._v(" "),s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("entry: ['./src/mod1.js', [...,] './src/index.js'] ：所有的模块会在启动时 按照配置顺序 加载，合并到最后一个模块会被导出。chunk名默认为main ")]),e._v(" "),s("p",[e._v("对象")]),e._v(" "),s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("entry: {index: '...', login : [...] }：如果传入Object，则会生成多个入口打包文件， key是chunk名，value可以是字符串，也可是数组。 ")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("entry:{\n    index:'./index/index.js',\n    login:['./mod/mod1.js','./index/login.js']\n}")])]),e._v(" "),s("h2",[e._v("配置输出目录")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",[e._v("设置入口配置的文件的输出规则，通过output对象实现，常用设置：")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("output:{\n    path:__dirname+'/build',\n    filename:'[name]-[id].js',\n    publicPath:'/asstes/'\n}")])]),e._v(" "),s("h2",[e._v("设置loader")]),e._v(" "),s("p",[e._v("loader是webpack中比较重要的部分，她是处理各类资源的执行者。它们是一系列的函数（运行在node.js中），将资源中的代码作为参数，然后返回新的代码。你可以用loader告诉webpack可以加载哪些文件，或者不加载哪些文件。")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("安装loader")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("npm install xxx-loader--save")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("npm install xxx-loader--save-dev")])]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("配置loader")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("modules:{\n    loaders:[\n        {\n            test:/\\.js$/,//匹配希望处理文件的路径\n            exclude:/node_modules/,// 匹配不希望处理文件的路径\n            loaders:'xxx-loader?a=x&b=y'  //此处xxx-loader 可以简写成xxx , ？后以query方式传递给loader参数\n        },\n        ...\n    ]\n}")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("npm install xxx-loader--save-dev")])]),e._v(" "),s("h2",[e._v("安装插件")]),e._v(" "),s("h3",[e._v("解析并抽取css")]),e._v(" "),s("p",[e._v("如果我们希望样式通过 <link> 引入，而不是放在 <style> 标签内呢，即使这样做会多一个请求。\n            这样你可以在模块中，尽情使用 require(style.css), webpack会帮你做解析，合并entry中定义js及其依赖中所用到的所有css，然后生成一个指定的css文件。")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("$npm install extract-text-webpack-plugin --save-dev")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v('var ExtractTextPlugin=require(\'extract-text-webpack-plugin\'); //①\n\n...\nmodule:{\n    loaders:[\n        {      //②\n            test:/\\.css$/,\n            loader:ExtractTextPlugin.extract(\n                "style-loader",\n                "css-loader?sourceMap"\n            )\n        },{\n            test:/\\.less$/,\n            loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")\n        }\n    ]\n\n},\nplugins:[  //③\n    newExtractTextPlugin("css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",{\n        disable:false,   //生成css文件是否失效\n        allChunks:true\n    })\n]\n...')])]),e._v(" "),s("h3",[e._v("处理图片、字体等文件")]),e._v(" "),s("p",[e._v("在css中或者js逻辑中，都会涉及到require图片的情况，webpack可以内联图片地址到打包js中并且通过require()返回图片路径。当然，不只是图片，还有css中用到的iconfont，特殊情况用到的flash等，都可以相似处理。这里，我们需要用到url-loader 或 file-loader。"),s("br")]),e._v(" "),s("blockquote",{staticClass:"site-text layui-elem-quote"},[e._v("\n            file-loader: 将匹配到的文件复制到输出文件夹，并根据output.publicPath的设置返回文件路径"),s("br"),e._v("\n            url-loader: 类似file-loader ,但是它可以返回一个DataUrl (base 64)如果文件小于设置的限制值limit。\n        ")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("$ npm install url-loader file-loader--save")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("module:{\n    loaders:[\n        {\n            test:/\\.(png|jpg)$/,\n            loader:'url-loader?limit=8192'//  <= 8kb的图片base64内联\n        },\n            {\n                test:/\\.woff(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n                loader:'url?limit=10000&minetype=application/font-woff&name=font/bootstrap/[name]_[hash].[ext]'\n            },\n            {\n                test:/\\.woff2(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n                loader:'url?limit=10&minetype=application/font-woff&name=font/bootstrap/[name]_[hash].[ext]'\n            }\n    ]\n}")])]),e._v(" "),s("h3",[e._v("解析VUE")]),e._v(" "),s("p",[e._v("和React项目类似，如果要解析VUE框架编写的.vue文件，需要下载loader:")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("$ npm install vue-loader--save")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("loaders:[\n  {\n      test:/\\.vue$/,\n      loader:'vue-loader'\n  }\n]")])]),e._v(" "),s("h3",[e._v("解析ES6语法")]),e._v(" "),s("p",[e._v("babel可以让我们在编写代码的时候，使用更高级的ECMAScript6的语法。然后我们编写的JS文件可以被编译成可被低版本浏览器处理的常规代码。")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v("$ npm install babel-loader--save")]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("loaders:[\n  {\n      test:/\\.js$/,\n      exclude:/node_modules/,\n      loader:'babel'\n  }\n]")])]),e._v(" "),s("h3",[e._v("resolve(分解,溶解)")]),e._v(" "),s("div",{staticClass:"site-text"},[s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("resolve: {\n//查找module的话从这里开始查找\nroot: path.resolve('./src/scripts/module'),//绝对路径\nextensions: ['', '.vue', '.js'],  //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名\nalias: {   //模块别名定义，方便后续直接引用别名，无须多写长长的地址\nspin: path.join(__dirname, './dist/scripts/lib/spin.min.js'),//后续直接 require('spin') 即可\ndialog: path.join(__dirname, './dist/scripts/lib/artdialog/dist/dialog-plus-min.js'),\npagination: path.join(__dirname, './dist/scripts/lib/jquery.twbsPagination.min.js')\n  }\n},")])]),e._v(" "),s("h3",[e._v("去除多个文件中js库的频繁依赖")]),e._v(" "),s("p",[e._v("当我们经常使用Vue、jQuery等外部第三方库的时候，\n            不需要引入jQuery等常用模块了，直接使用  配置的这些变量，webpack就会自动引入配置的库。\n            webpack.config.js中：")]),e._v(" "),s("blockquote",{staticClass:"site-text layui-elem-quote"},[e._v("\n            PS:需要先引入npm包,"),s("br"),e._v("\n            ①npm包引入:jquery  $ npm install jquery --save-dev"),s("br"),e._v("\n            ②路径引入: \"puls\": path.join(__dirname, './src/lib/js/test.js'),  ---使用-在main.js中直接用: test.js==>  puls.myalert\n        ")]),e._v(" "),s("div",{staticClass:"site-text"},[s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v('var webpack=require(\'webpack\');\n\n...\nplugins:[\n   new webpack.ProvidePlugin({\n       "puls": path.join(__dirname, \'./src/lib/js/test.js\'),   //\n       "$":"jquery",\n       "jQuery":"jquery",\n       "window.jQuery":"jquery",\n       "Vue":"vue"\n   })\n]\n...')]),e._v(" "),s("p",[e._v("这样，我们在JS中，就不需要引入jQuery等常用模块了，直接使用配置的这些变量，webpack就会自动引入配置的库。")])]),e._v(" "),s("h3",[e._v("externals (外控)")]),e._v(" "),s("p",[e._v("想在项目中require一些其他的类库或者API，而又不想让这些类库的源码被构建到运行时文件中，")]),e._v(" "),s("div",{staticClass:"site-text"},[s("p",{staticClass:"layui-bg-green wui-p10"},[e._v('使用的时候,var jquery=require("jquery");则不会打包进去,但需要提前在外部引入')]),e._v(" "),s("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[e._v("//添加了此项，则表明从外部引入，内部不会打包合并进去\n    externals: {\n      //外部引入2，页面中需要预先引入相关库\n      jquery: 'jQuery', //此时外部引入\n      $: 'jQuery'\n    }")])])])}]},e.exports.render._withStripped=!0}});