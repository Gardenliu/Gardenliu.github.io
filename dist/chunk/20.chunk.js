webpackJsonp([20],{131:function(t,v,_){var d=_(43)(_(170),_(247),null,null);d.options.__file="F:\\www\\vue_ui\\iview_build\\wui\\src\\views\\guide\\name\\classname.vue",d.esModule&&Object.keys(d.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] classname.vue: functional components are not supported with templates, they should use render functions."),t.exports=d.exports},170:function(t,v,_){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={methods:{}}},247:function(t,v,_){t.exports={render:function(){var t=this,v=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"wui-content"},[_("h2",[t._v("ClassName命名")]),t._v(" "),_("p",[t._v("ClassName的命名应该尽量精短、明确，必须以字母开头命名，且全部字母为小写，单词之间统一使用下划线 “_” 连接")]),t._v(" "),_("h3",[t._v("命名原则")]),t._v(" "),_("blockquote",{staticClass:"layui-elem-quote"},[t._v("\n            基于姓氏命名法（继承 + 外来）\n        ")]),t._v(" "),_("div",{staticClass:"site-text"},[_("p",{staticClass:"layui-bg-green wui-p10"},[t._v("祖先模块不能出现下划线，除了是全站公用模块，如 mod_ 系列的命名：")]),t._v(" "),_("h4",[t._v("推荐:")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="modulename">\n\t<div class="modulename_info">\n\t\t<div class="modulename_son"></div>\n\t\t<div class="modulename_son"></div>\n\t\t...\n\t</div>\n</div>\n\n\x3c!-- 这个是全站公用模块，祖先模块允许直接出现下划线 --\x3e\n<div class="mod_info">\n\t<div class="mod_info_son"></div>\n\t<div class="mod_info_son"></div>\n\t...\n</div>')]),t._v(" "),_("h4",[t._v("不推荐:")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="modulename_info">\n\t<div class="modulename_info_son"></div>\n\t<div class="modulename_info_son"></div>\n\t...\n</div>')])]),t._v(" "),_("div",{staticClass:"site-text"},[_("p",{staticClass:"layui-bg-green wui-p10"},[t._v("在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="modulename">\n\t<div class="modulename_cover"></div>\n\t<div class="modulename_info"></div>\n</div>')])]),t._v(" "),_("div",{staticClass:"site-text"},[_("p",{staticClass:"layui-bg-green wui-p10"},[t._v("当子孙模块超过4级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块")]),t._v(" "),_("h4",[t._v("推荐")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="modulename">\n\t<div class="modulename_cover"></div>\n\t<div class="modulename_info">\n    \t<div class="modulename_info_user">\n    \t\t<div class="modulename_info_user_img">\n    \t\t\t<img src="" alt="">\n    \t\t\t\x3c!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写--\x3e\n    \t\t\t<div class="miui_tit"></div>\n    \t\t\t<div class="miui_txt"></div>\n    \t\t\t...\n    \t\t</div>\n    \t</div>\n    \t<div class="modulename_info_list"></div>\n\t</div>\n</div>')]),t._v(" "),_("h4",[t._v("不推荐")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="modulename">\n\t<div class="modulename_cover"></div>\n\t<div class="modulename_info">\n    \t<div class="modulename_info_user">\n    \t\t<div class="modulename_info_user_img">\n    \t\t\t<img src="" alt="">\n    \t\t\t<div class="modulename_info_user_img_tit"></div>\n    \t\t\t<div class="modulename_info_user_img_txt"></div>\n    \t\t\t...\n    \t\t</div>\n    \t</div>\n    \t<div class="modulename_info_list"></div>\n\t</div>\n</div>')])]),t._v(" "),_("h2",[t._v("模块命名")]),t._v(" "),_("div",{staticClass:"site-text"},[_("p",{staticClass:"layui-bg-green wui-p10"},[t._v("全站公共模块：以 mod_ 开头")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="mod_yours"></div>')])]),t._v(" "),_("div",{staticClass:"site-text"},[_("p",{staticClass:"layui-bg-green wui-p10"},[t._v("业务公共模块：以 业务名_mod_ 开头")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="paipai_mod_yours"></div>')])]),t._v(" "),_("h2",[t._v("常用命名推荐")]),t._v(" "),_("div",{staticClass:"site-text"},[_("p",{staticClass:"layui-bg-green wui-p10"},[t._v("注意：ad、banner、gg、guanggao 等有机会和广告挂勾的字眠不建议直接用来做ClassName"),_("br"),t._v("敏感不和谐字眼也不应该出现")]),t._v(" "),_("p",[t._v("因为有些浏览器插件（Chrome的广告拦截插件等）会直接过滤这些类名，因此")]),t._v(" "),_("pre",{staticClass:"layui-code",attrs:{"lay-title":"HTML"}},[t._v('<div class="ad"></div>\n<div class="fuck"></div>\n<div class="jer"></div>\n<div class="sm"></div>\n<div class="gcd"></div>\n<div class="ass"></div>\n<div class="KMT"></div>\n...')])]),t._v(" "),_("table",{staticClass:"site-table"},[_("thead",[_("tr",[_("th",[t._v("ClassName")]),t._v(" "),_("th",[t._v("含义")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("about")]),t._v(" "),_("td",[t._v("关于")])]),t._v(" "),_("tr",[_("td",[t._v("account")]),t._v(" "),_("td",[t._v("账户")])]),t._v(" "),_("tr",[_("td",[t._v("arrow")]),t._v(" "),_("td",[t._v("箭头图标")])]),t._v(" "),_("tr",[_("td",[t._v("article")]),t._v(" "),_("td",[t._v("文章")])]),t._v(" "),_("tr",[_("td",[t._v("aside")]),t._v(" "),_("td",[t._v("边栏")])]),t._v(" "),_("tr",[_("td",[t._v("audio")]),t._v(" "),_("td",[t._v("音频")])]),t._v(" "),_("tr",[_("td",[t._v("avatar")]),t._v(" "),_("td",[t._v("头像")])]),t._v(" "),_("tr",[_("td",[t._v("bg,background")]),t._v(" "),_("td",[t._v("背景")])]),t._v(" "),_("tr",[_("td",[t._v("bar")]),t._v(" "),_("td",[t._v("栏（工具类）")])]),t._v(" "),_("tr",[_("td",[t._v("branding")]),t._v(" "),_("td",[t._v("品牌化")])]),t._v(" "),_("tr",[_("td",[t._v("crumb,breadcrumbs")]),t._v(" "),_("td",[t._v("面包屑")])]),t._v(" "),_("tr",[_("td",[t._v("btn,button")]),t._v(" "),_("td",[t._v("按钮")])]),t._v(" "),_("tr",[_("td",[t._v("caption")]),t._v(" "),_("td",[t._v("标题，说明")])]),t._v(" "),_("tr",[_("td",[t._v("category")]),t._v(" "),_("td",[t._v("分类")])]),t._v(" "),_("tr",[_("td",[t._v("chart")]),t._v(" "),_("td",[t._v("图表")])]),t._v(" "),_("tr",[_("td",[t._v("clearfix")]),t._v(" "),_("td",[t._v("清除浮动")])]),t._v(" "),_("tr",[_("td",[t._v("close")]),t._v(" "),_("td",[t._v("关闭")])]),t._v(" "),_("tr",[_("td",[t._v("col,column")]),t._v(" "),_("td",[t._v("列")])]),t._v(" "),_("tr",[_("td",[t._v("comment")]),t._v(" "),_("td",[t._v("评论")])]),t._v(" "),_("tr",[_("td",[t._v("community")]),t._v(" "),_("td",[t._v("社区")])]),t._v(" "),_("tr",[_("td",[t._v("container")]),t._v(" "),_("td",[t._v("容器")])]),t._v(" "),_("tr",[_("td",[t._v("content")]),t._v(" "),_("td",[t._v("内容")])]),t._v(" "),_("tr",[_("td",[t._v("copyright")]),t._v(" "),_("td",[t._v("版权")])]),t._v(" "),_("tr",[_("td",[t._v("current")]),t._v(" "),_("td",[t._v("当前态，选中态")])]),t._v(" "),_("tr",[_("td",[t._v("default")]),t._v(" "),_("td",[t._v("默认")])]),t._v(" "),_("tr",[_("td",[t._v("description")]),t._v(" "),_("td",[t._v("描述")])]),t._v(" "),_("tr",[_("td",[t._v("details")]),t._v(" "),_("td",[t._v("细节")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("不可用")])]),t._v(" "),_("tr",[_("td",[t._v("entry")]),t._v(" "),_("td",[t._v("文章，博文")])]),t._v(" "),_("tr",[_("td",[t._v("error")]),t._v(" "),_("td",[t._v("错误")])]),t._v(" "),_("tr",[_("td",[t._v("even")]),t._v(" "),_("td",[t._v("偶数，常用于多行列表或表格中")])]),t._v(" "),_("tr",[_("td",[t._v("fail")]),t._v(" "),_("td",[t._v("失败（提示）")])]),t._v(" "),_("tr",[_("td",[t._v("feature")]),t._v(" "),_("td",[t._v("专题")])]),t._v(" "),_("tr",[_("td",[t._v("fewer")]),t._v(" "),_("td",[t._v("收起")])]),t._v(" "),_("tr",[_("td",[t._v("field")]),t._v(" "),_("td",[t._v("用于表单的输入区域")])]),t._v(" "),_("tr",[_("td",[t._v("figure")]),t._v(" "),_("td",[t._v("图")])]),t._v(" "),_("tr",[_("td",[t._v("filter")]),t._v(" "),_("td",[t._v("筛选")])]),t._v(" "),_("tr",[_("td",[t._v("first")]),t._v(" "),_("td",[t._v("第一个，常用于列表中")])]),t._v(" "),_("tr",[_("td",[t._v("footer")]),t._v(" "),_("td",[t._v("页脚")])]),t._v(" "),_("tr",[_("td",[t._v("forum")]),t._v(" "),_("td",[t._v("论坛")])]),t._v(" "),_("tr",[_("td",[t._v("gallery")]),t._v(" "),_("td",[t._v("画廊")])]),t._v(" "),_("tr",[_("td",[t._v("group")]),t._v(" "),_("td",[t._v("模块，清除浮动")])]),t._v(" "),_("tr",[_("td",[t._v("header")]),t._v(" "),_("td",[t._v("页头")])]),t._v(" "),_("tr",[_("td",[t._v("help")]),t._v(" "),_("td",[t._v("帮助")])]),t._v(" "),_("tr",[_("td",[t._v("hide")]),t._v(" "),_("td",[t._v("隐藏")])]),t._v(" "),_("tr",[_("td",[t._v("hightlight")]),t._v(" "),_("td",[t._v("高亮")])]),t._v(" "),_("tr",[_("td",[t._v("home")]),t._v(" "),_("td",[t._v("主页")])]),t._v(" "),_("tr",[_("td",[t._v("icon")]),t._v(" "),_("td",[t._v("图标")])]),t._v(" "),_("tr",[_("td",[t._v("info,information")]),t._v(" "),_("td",[t._v("信息")])]),t._v(" "),_("tr",[_("td",[t._v("last")]),t._v(" "),_("td",[t._v("最后一个，常用于列表中")])]),t._v(" "),_("tr",[_("td",[t._v("links")]),t._v(" "),_("td",[t._v("链接")])]),t._v(" "),_("tr",[_("td",[t._v("login")]),t._v(" "),_("td",[t._v("登录")])]),t._v(" "),_("tr",[_("td",[t._v("logout")]),t._v(" "),_("td",[t._v("退出")])]),t._v(" "),_("tr",[_("td",[t._v("logo")]),t._v(" "),_("td",[t._v("标志")])]),t._v(" "),_("tr",[_("td",[t._v("main")]),t._v(" "),_("td",[t._v("主体")])]),t._v(" "),_("tr",[_("td",[t._v("menu")]),t._v(" "),_("td",[t._v("菜单")])]),t._v(" "),_("tr",[_("td",[t._v("meta")]),t._v(" "),_("td",[t._v("作者、更新时间等信息栏，一般位于标题之下")])]),t._v(" "),_("tr",[_("td",[t._v("module")]),t._v(" "),_("td",[t._v("模块")])]),t._v(" "),_("tr",[_("td",[t._v("more")]),t._v(" "),_("td",[t._v("更多（展开）")])]),t._v(" "),_("tr",[_("td",[t._v("msg,message")]),t._v(" "),_("td",[t._v("消息")])]),t._v(" "),_("tr",[_("td",[t._v("nav,navigation")]),t._v(" "),_("td",[t._v("导航")])]),t._v(" "),_("tr",[_("td",[t._v("next")]),t._v(" "),_("td",[t._v("下一页")])]),t._v(" "),_("tr",[_("td",[t._v("nub")]),t._v(" "),_("td",[t._v("小块")])]),t._v(" "),_("tr",[_("td",[t._v("odd")]),t._v(" "),_("td",[t._v("奇数，常用于多行列表或表格中")])]),t._v(" "),_("tr",[_("td",[t._v("off")]),t._v(" "),_("td",[t._v("鼠标离开")])]),t._v(" "),_("tr",[_("td",[t._v("on")]),t._v(" "),_("td",[t._v("鼠标移过")])]),t._v(" "),_("tr",[_("td",[t._v("output")]),t._v(" "),_("td",[t._v("输出")])]),t._v(" "),_("tr",[_("td",[t._v("pagination")]),t._v(" "),_("td",[t._v("分页")])]),t._v(" "),_("tr",[_("td",[t._v("pop,popup")]),t._v(" "),_("td",[t._v("弹窗")])]),t._v(" "),_("tr",[_("td",[t._v("preview")]),t._v(" "),_("td",[t._v("预览")])]),t._v(" "),_("tr",[_("td",[t._v("previous")]),t._v(" "),_("td",[t._v("上一页")])]),t._v(" "),_("tr",[_("td",[t._v("primary")]),t._v(" "),_("td",[t._v("主要")])]),t._v(" "),_("tr",[_("td",[t._v("progress")]),t._v(" "),_("td",[t._v("进度条")])]),t._v(" "),_("tr",[_("td",[t._v("promotion")]),t._v(" "),_("td",[t._v("促销")])]),t._v(" "),_("tr",[_("td",[t._v("rcommd,recommendations")]),t._v(" "),_("td",[t._v("推荐")])]),t._v(" "),_("tr",[_("td",[t._v("reg,register")]),t._v(" "),_("td",[t._v("注册")])]),t._v(" "),_("tr",[_("td",[t._v("save")]),t._v(" "),_("td",[t._v("保存")])]),t._v(" "),_("tr",[_("td",[t._v("search")]),t._v(" "),_("td",[t._v("搜索")])]),t._v(" "),_("tr",[_("td",[t._v("secondary")]),t._v(" "),_("td",[t._v("次要")])]),t._v(" "),_("tr",[_("td",[t._v("section")]),t._v(" "),_("td",[t._v("区块")])]),t._v(" "),_("tr",[_("td",[t._v("selected")]),t._v(" "),_("td",[t._v("已选")])]),t._v(" "),_("tr",[_("td",[t._v("share")]),t._v(" "),_("td",[t._v("分享")])]),t._v(" "),_("tr",[_("td",[t._v("show")]),t._v(" "),_("td",[t._v("显示")])]),t._v(" "),_("tr",[_("td",[t._v("sidebar")]),t._v(" "),_("td",[t._v("边栏，侧栏")])]),t._v(" "),_("tr",[_("td",[t._v("slide")]),t._v(" "),_("td",[t._v("幻灯片，图片切换")])]),t._v(" "),_("tr",[_("td",[t._v("sort")]),t._v(" "),_("td",[t._v("排序")])]),t._v(" "),_("tr",[_("td",[t._v("sub")]),t._v(" "),_("td",[t._v("次级的，子级的")])]),t._v(" "),_("tr",[_("td",[t._v("submit")]),t._v(" "),_("td",[t._v("提交")])]),t._v(" "),_("tr",[_("td",[t._v("subscribe")]),t._v(" "),_("td",[t._v("订阅")])]),t._v(" "),_("tr",[_("td",[t._v("subtitle")]),t._v(" "),_("td",[t._v("副标题")])]),t._v(" "),_("tr",[_("td",[t._v("success")]),t._v(" "),_("td",[t._v("成功（提示）")])]),t._v(" "),_("tr",[_("td",[t._v("summary")]),t._v(" "),_("td",[t._v("摘要")])]),t._v(" "),_("tr",[_("td",[t._v("tab")]),t._v(" "),_("td",[t._v("标签页")])]),t._v(" "),_("tr",[_("td",[t._v("table")]),t._v(" "),_("td",[t._v("表格")])]),t._v(" "),_("tr",[_("td",[t._v("txt,text")]),t._v(" "),_("td",[t._v("文本")])]),t._v(" "),_("tr",[_("td",[t._v("thumbnail")]),t._v(" "),_("td",[t._v("缩略图")])]),t._v(" "),_("tr",[_("td",[t._v("time")]),t._v(" "),_("td",[t._v("时间")])]),t._v(" "),_("tr",[_("td",[t._v("tips")]),t._v(" "),_("td",[t._v("提示")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("标题")])]),t._v(" "),_("tr",[_("td",[t._v("video")]),t._v(" "),_("td",[t._v("视频")])]),t._v(" "),_("tr",[_("td",[t._v("wrap")]),t._v(" "),_("td",[t._v("容器，包，一般用于最外层")])]),t._v(" "),_("tr",[_("td",[t._v("wrapper")]),t._v(" "),_("td",[t._v("容器，包，一般用于最外层")])])])])])}]},t.exports.render._withStripped=!0}});