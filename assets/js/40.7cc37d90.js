(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{331:function(t,s,a){"use strict";a.r(s);var n=a(4),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"chrome-89-更新事件触发顺序-导致99-的文章都错了-包括mdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#chrome-89-更新事件触发顺序-导致99-的文章都错了-包括mdn"}},[t._v("#")]),t._v(" Chrome 89 更新事件触发顺序，导致99%的文章都错了（包括MDN）")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/FgJv4R-70XuL6st08OKvVg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/FgJv4R-70XuL6st08OKvVg"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"起因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[t._v("#")]),t._v(" 起因")]),t._v(" "),s("p",[t._v("最近楠溪在看事件相关的文章，然后就跑来和我讨论说以下代码的执行效果和网上的文章不一致，代码如下:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bubble'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capture'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bubble'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capture'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("以上是一段很简单的事件注册的代码，然后我们点击 "),s("code",[t._v("button")]),t._v("。")]),t._v(" "),s("p",[t._v("先不看结果，思考一下")]),t._v(" "),s("p",[t._v("然后我们来看看结果")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170938222.gif",alt:"图片"}})]),t._v(" "),s("p",[t._v("对于绝大多数前端老鸟来说，会脱口而出地说出以下顺序。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("capture div\nbubble btn\ncapture btn\nbubble div\n")])])]),s("h2",{attrs:{id:"探索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#探索"}},[t._v("#")]),t._v(" 探索")]),t._v(" "),s("p",[t._v("但是不管是MDN，还是网上大多数的教程而言说的都是这个顺序。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170951306.png",alt:"图片"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170951020.png",alt:"图片"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170952093.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("对于这个现象，我感到很迷惑，我依稀记得，在几个月前，Chrome 还不是这样的行为，盲猜是不是因为 Chrome 版本的问题呢？")]),t._v(" "),s("p",[t._v("以上动图的 Chrome 版本是 90.0.4430.212")]),t._v(" "),s("p",[t._v("因此我找了个 Chrome 版本为 84.0.4109.0 进行测试。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170953762.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("果然是版本的问题，但是事情的追踪依然很难，由于搜索了规范以及查了谷歌上的一些资料，并没有很好地帮助我解决这个疑惑，我不确定是因为 Chrome 引入的 bug 还是出现了什么问题。")]),t._v(" "),s("p",[t._v("因此我就向 chromium 报告了这个问题。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170953310.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("最终在 Chrome 开发人员的帮助下，找到了这两个讨论")]),t._v(" "),s("p",[t._v("https://github.com/whatwg/dom/issues/685")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170953448.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("https://github.com/whatwg/dom/issues/746")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170953898.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("在上述 issues 中可以看到， 起因是在 https://bugs.webkit.org/show_bug.cgi?id=174288 中，有人指出，在 webkit 中当前的事件模型，会导致含有 Shadow DOM 的情况下，子元素的捕获事件会优先于父元素的捕获事件触发。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170952684.png",alt:"图片"}})]),t._v(" "),s("p",[t._v("而在旧模型中，一旦达到 AT_TARGET ，所有注册的监听器就将按照顺序被触发，而不管他们是否被标记为捕获。由于 Shadow DOM 会创建多个 targets ，导致了事件执行顺序的错误。")]),t._v(" "),s("p",[t._v("而上述问题在 Gecko （Mozilla Firefox 的排版引擎）却运行正常（先捕获再冒泡）。为此 whatwg 提出了一个新的模型结构来解决这个问题。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/qdzhou/img-upload/raw/master/images/202202170952452.png",alt:"图片"}})]),t._v(" "),s("h2",{attrs:{id:"结论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),s("p",[t._v("所有的疑问到此都迎刃而解了，到现在为主我们梳理一下我们的问题。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}}),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("1.按照旧版本事件触发机制")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("表现")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("目标元素触发事件顺序和注册事件顺序有关")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("2.新的的事件触发机制")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("表现")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("目标元素触发事件顺序按照先捕获再冒泡的顺序触发")])])])]),t._v(" "),s("p",[t._v("而这个版本分界线是在 Chrome 89.0.4363.0  和 89.0.4358.0。")]),t._v(" "),s("p",[t._v("而 Chrome 89.0.4363.0 是在 2020-12-22 发布的，也就是最近几个月的事情，因此近几个月如果你的Chrome 更新了就会遇到和我一样的现象。")]),t._v(" "),s("p",[t._v("在 Chrome 89.0.4363.0 以及之后版本中，"),s("strong",[t._v("目标元素的触发事件顺序不再按照注册顺序触发")]),t._v("！"),s("strong",[t._v("而是按照先捕获再冒泡的形式依次执行！")])]),t._v(" "),s("p",[t._v("然后我们再来看看这样修改会给我们带来怎么样的影响。")]),t._v(" "),s("ol",[s("li",[t._v("首先我们要明确是的，网上以前的大部分文章已经不适用于当下的 Chrome 新版本了！")]),t._v(" "),s("li",[t._v("如果我们业务中有依赖相关的事件触发顺序，请仔细检查！")])]),t._v(" "),s("p",[t._v("举个🌰")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" div "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bubble'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capture'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bubble'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'capture'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("在新版本中，当 button 元素被点击后，最终 a 的结果为 [2,1]，而在旧版本中，这个结果则为 [1,2]。")]),t._v(" "),s("p",[t._v("那对于现阶段一些线上代码改如何改造呢？")]),t._v(" "),s("h2",{attrs:{id:"改进方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#改进方案"}},[t._v("#")]),t._v(" 改进方案")]),t._v(" "),s("p",[t._v("那么现在我们无法控制用户使用哪个版本的浏览器，该如何解决这个问题而来避免遇到线上问题呢？")]),t._v(" "),s("p",[t._v("其实很简单。")]),t._v(" "),s("p",[t._v("我们只需要将所有目标元素代码的顺序都按照先书写捕获事件代码，再书写冒泡事件代码，就可以兼容本次的更新。")]),t._v(" "),s("h2",{attrs:{id:"思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),s("p",[t._v("所有的事情都不是一成不变的，不管是对于一些相对官方的文章或者教程我们都要抱以怀疑的态度，相信我们所看到的。也许我这篇的言论在多年之后也会是一个错误示例，但是是对当下问题的一个记录。本文也还有很多不足之处，如果有问题请在评论中指出。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("p",[t._v("https://chromium.cypress.io/")]),t._v(" "),s("p",[t._v("https://github.com/whatwg/dom/issues/685")]),t._v(" "),s("p",[t._v("https://bugs.webkit.org/show_bug.cgi?id=174288")]),t._v(" "),s("p",[t._v("https://github.com/whatwg/dom/issues/746")]),t._v(" "),s("p",[t._v("https://dom.spec.whatwg.org/#dispatching-events")])])}),[],!1,null,null,null);s.default=p.exports}}]);