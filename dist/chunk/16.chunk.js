webpackJsonp([16],{131:function(t,s,n){var e=n(43)(n(164),n(193),null,null);e.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\guide\\js\\language.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] language.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},164:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={methods:{}}},193:function(t,s,n){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"wui-content"},[n("h2",[t._v("引用")]),t._v(" "),n("p",{staticClass:"layui-bg-blue wui-p10"},[t._v("const 和 let 都是块级作用域，var 是函数级作用域")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("对所有引用都使用 const，不要使用 var")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nvar a = 1\nvar b = 2\n// good\nconst a = 1\nconst b = 2")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("如果引用是可变动的，则使用 let")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nvar count = 1\nif (count < 10) {\n  count += 1\n}\n// good\nlet count = 1\nif (count < 10) {\n  count += 1\n}")])]),t._v(" "),n("h2",[t._v("对象")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("请使用字面量值创建对象")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nconst a = new Object{}\n// good\nconst a = {}")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("别使用保留字作为对象的键值，这样在 IE8 下不会运行")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nconst a = {\n  default: {},  // default 是保留字\n  common: {}\n}\n// good\nconst a = {\n  defaults: {},\n  common: {}\n}")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("请使用对象属性值的简写方式")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("const job = 'FrontEnd'\n// bad\nconst item = {\n  job: job\n}\n// good\nconst item = {\n  job\n}")])]),t._v(" "),n("h2",[t._v("数组")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("请使用字面量值创建数组")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nconst items = new Array()\n// good\nconst items = []")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("使用拓展运算符 ... 复制数组")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nconst items = []\nconst itemsCopy = []\nconst len = items.length\nlet i\n// bad\nfor (i = 0; i < len; i++) {\n  itemsCopy[i] = items[i]\n}\n// good\nitemsCopy = [...items]")])]),t._v(" "),n("h2",[t._v("解构赋值")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("当需要使用对象的多个属性时，请使用解构赋值")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nfunction getFullName (user) {\n  const firstName = user.firstName\n  const lastName = user.lastName\n  return `${firstName} ${lastName}`\n}\n// good\nfunction getFullName (user) {\n  const { firstName, lastName } = user\n  return `${firstName} ${lastName}`\n}\n// better\nfunction getFullName ({ firstName, lastName }) {\n  return `${firstName} ${lastName}`\n}")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("当需要使用数组的多个值时，请同样使用解构赋值")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("const arr = [1, 2, 3, 4]\n// bad\nconst first = arr[0]\nconst second = arr[1]\n// good\nconst [first, second] = arr")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("函数需要回传多个值时，请使用对象的解构，而不是数组的解构")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nfunction doSomething () {\n  return [top, right, bottom, left]\n}\n// 如果是数组解构，那么在调用时就需要考虑数据的顺序\nconst [top, xx, xxx, left] = doSomething()\n// good\nfunction doSomething () {\n  return { top, right, bottom, left }\n}\n// 此时不需要考虑数据的顺序\nconst { top, left } = doSomething()")])]),t._v(" "),n("h2",[t._v("字符串")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("程序化生成字符串时，请使用模板字符串")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("const test = 'test'\n// bad\nconst str = ['a', 'b', test].join()\n// bad\nconst str = 'a' + 'b' + test\n// good\nconst str = `ab${test}`")])]),t._v(" "),n("h2",[t._v("函数")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("请使用函数声明，而不是函数表达式")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nconst foo = function () {\n  // do something\n}\n// good\nfunction foo () {\n  // do something\n}")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("不要在非函数代码块中声明函数")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nif (isUse) {\n  function test () {\n    // do something\n  }\n}\n// good\nlet test\nif (isUse) {\n  test = () => {\n    // do something\n  }\n}")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("不要使用 arguments，可以选择使用 ...")]),t._v(" "),n("p",[t._v("arguments 只是一个类数组，而 ... 是一个真正的数组")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nfunction test () {\n  const args = Array.prototype.slice.call(arguments)\n  return args.join('')\n}\n// good\nfunction test (...args) {\n  return args.join('')\n}")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("不要更改函数参数的值")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nfunction test (opts) {\n  opts = opts || {}\n}\n// good\nfunction test (opts = {}) {\n  // ...\n}")])]),t._v(" "),n("h2",[t._v("模块")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("使用标准的 ES6 模块语法 import 和 export")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nconst util = require('./util')\nmodule.exports = util\n// good\nimport Util from './util'\nexport default Util\n// better\nimport { Util } from './util'\nexport default Util")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("不要使用 import 的通配符 *，这样可以确保你只有一个默认的 export")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("// bad\nimport * as Util from './util'\n// good\nimport Util from './util'")])]),t._v(" "),n("h2",[t._v("对象属性")]),t._v(" "),n("div",{staticClass:"site-text"},[n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("使用 . 来访问对象属性")]),t._v(" "),n("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v("const joke = {\n  name: 'haha',\n  age: 28\n}\n// bad\nconst name = joke['name']\n// good\nconst name = joke.name")])]),t._v(" "),n("h2",[t._v("for-in 循环")]),t._v(" "),n("p",{staticClass:"layui-bg-green wui-p10"},[t._v("推荐使用 for in 语法，但是在对对象进行操作时，容易忘了检测 hasOwnProperty(key)，所以我们启用了 ESLint 的 guard-for-in 选项")]),t._v(" "),n("p",[t._v("对数组进行 for in 的时候，顺序是不固定的")])])}]},t.exports.render._withStripped=!0}});