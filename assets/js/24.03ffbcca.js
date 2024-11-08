(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{315:function(t,a,s){"use strict";s.r(a);var r=s(4),n=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript深入之内存空间详细图解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript深入之内存空间详细图解"}},[t._v("#")]),t._v(" JavaScript深入之内存空间详细图解")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://muyiy.cn/blog/1/1.3.html"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("堆栈的内容和执行顺序我就不说了，前面两篇已经介绍过了。")]),t._v(" "),a("p",[t._v("但是"),a("strong",[t._v("今天补充一个知识点")]),t._v("：某些情况下，调用堆栈中函数调用的数量超出了调用堆栈的实际大小，浏览器会抛出一个错误终止运行。")]),t._v(" "),a("p",[t._v("对于下面的递归就会无限制的执行下去，直到超出调用堆栈的实际大小，这个是浏览器定义的。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-060211.png",alt:"img"}})]),t._v(" "),a("p",[t._v("现在正式开始今天的主题，"),a("strong",[t._v("内存空间详解")])]),t._v(" "),a("h2",{attrs:{id:"栈数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈数据结构"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E6%A0%88%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("栈数据结构")]),t._v(" "),a("p",[t._v("栈的结构就是后进先出**（LIFO）**，如果读过前面两篇文章应该是相当熟悉了。文中使用乒乓球盒子的结构来解释。")]),t._v(" "),a("p",[t._v("处于盒子中最顶层的乒乓球5，它一定是最后被放进去，但可以最先被使用。而我们想要使用底层的乒乓球1，就必须将上面的4个乒乓球取出来，让乒乓球1处于盒子顶层。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-060213.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"堆数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆数据结构"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E5%A0%86%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("堆数据结构")]),t._v(" "),a("p",[t._v("堆数据结构是一种树状结构。它的存取数据的方式与书架和书非常相似。我们只需要知道书的名字就可以直接取出书了，并不需要把上面的书取出来。JSON格式的数据中，我们存储的"),a("code",[t._v("key-value")]),t._v("可以是无序的，因为顺序的不同并不影响我们的使用，我们只需要关心书的名字。")]),t._v(" "),a("h2",{attrs:{id:"队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E9%98%9F%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("队列")]),t._v(" "),a("p",[t._v("队列是一种先进先出（"),a("strong",[t._v("FIFO")]),t._v("）的数据结构，这是事件循环（Event Loop）的基础结构，事件循环我们会在第8期详解介绍。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-60214.jpg",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"变量的存放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量的存放"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E5%8F%98%E9%87%8F%E7%9A%84%E5%AD%98%E6%94%BE",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("变量的存放")]),t._v(" "),a("p",[t._v("首先我们应该知道内存中有栈和堆，那么变量应该存放在哪里呢，"),a("strong",[t._v("堆")]),t._v("？"),a("strong",[t._v("栈")]),t._v("？")]),t._v(" "),a("ul",[a("li",[t._v("1、基本类型 --\x3e 保存在"),a("strong",[t._v("栈")]),t._v("内存中，因为这些类型在内存中分别占有固定大小的空间，通过按值来访问。基本类型一共有6种：Undefined、Null、Boolean、Number 、String和Symbol")]),t._v(" "),a("li",[t._v("2、引用类型 --\x3e 保存在"),a("strong",[t._v("堆")]),t._v("内存中，因为这种值的大小不固定，因此不能把它们保存到栈内存中，但内存地址大小的固定的，因此保存在堆内存中，在栈内存中存放的只是该对象的访问地址。当查询引用类型的变量时， 先从"),a("strong",[t._v("栈中读取内存地址")]),t._v("， 然后再通过地址"),a("strong",[t._v("找到堆中的值")]),t._v("。对于这种，我们把它叫做按引用访问。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://resource.muyiy.cn/image/2019-07-24-060214.png",alt:"img"}})]),t._v(" "),a("p",[t._v("在计算机的数据结构中，栈比堆的运算速度快，Object是一个复杂的结构且可以扩展：数组可扩充，对象可添加属性，都可以增删改查。将他们放在堆中是为了不影响栈的效率。而是通过引用的方式查找到堆中的实际对象再进行操作。所以查找引用类型值的时候先去"),a("strong",[t._v("栈")]),t._v("查找再去"),a("strong",[t._v("堆")]),t._v("查找。")]),t._v(" "),a("h2",{attrs:{id:"几个问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几个问题"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("几个问题")]),t._v(" "),a("p",[t._v("问题1：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时a的值是多少？")]),t._v("\n")])])]),a("p",[t._v("问题2：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端开发'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'进阶'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时a.name的值是多少")]),t._v("\n")])])]),a("p",[t._v("问题3：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'前端开发'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时b的值是多少")]),t._v("\n")])])]),a("p",[t._v("现在来解答一下，三个问题的答案分别是"),a("code",[t._v("20")]),t._v("、"),a("code",[t._v("‘进阶’")]),t._v("、"),a("code",[t._v("{ name: '前端开发' }")])]),t._v(" "),a("ul",[a("li",[t._v("对于问题1，a、b都是基本类型，它们的值是存储在栈中的，a、b分别有各自独立的栈空间，所以修改了b的值以后，a的值并不会发生变化。")]),t._v(" "),a("li",[t._v("对于问题2，a、b都是引用类型，栈内存中存放地址指向堆内存中的对象，引用类型的复制会为新的变量自动分配一个新的值保存在变量对象中，但只是引用类型的一个地址指针而已，实际指向的是同一个对象，所以修改"),a("code",[t._v("b.name")]),t._v("的值后，相应的"),a("code",[t._v("a.name")]),t._v("也就发生了改变。")]),t._v(" "),a("li",[t._v("对于问题3，首先要说明的是"),a("code",[t._v("null")]),t._v("是基本类型，"),a("code",[t._v("a = null")]),t._v("之后只是把a存储在栈内存中地址改变成了基本类型null，并不会影响堆内存中的对象，所以b的值不受影响。")])]),t._v(" "),a("h2",{attrs:{id:"内存空间管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存空间管理"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E5%86%85%E5%AD%98%E7%A9%BA%E9%97%B4%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("内存空间管理")]),t._v(" "),a("p",[t._v("JavaScript的内存生命周期是")]),t._v(" "),a("ul",[a("li",[t._v("1、分配你所需要的内存")]),t._v(" "),a("li",[t._v("2、使用分配到的内存（读、写）")]),t._v(" "),a("li",[t._v("3、不需要时将其释放、归还")])]),t._v(" "),a("p",[t._v("JavaScript有自动垃圾收集机制，最常用的是通过"),a("strong",[t._v("标记清除")]),t._v("的算法来找到哪些对象是不再继续使用的，使用"),a("code",[t._v("a = null")]),t._v("其实仅仅只是做了一个释放引用的操作，让 a 原本对应的值失去引用，脱离执行环境，这个值会在下一次垃圾收集器执行操作时被找到并释放。")]),t._v(" "),a("p",[t._v("在局部作用域中，当函数执行完毕，局部变量也就没有存在的必要了，因此垃圾收集器很容易做出判断并回收。但是全局变量什么时候需要自动释放内存空间则很难判断，因此在开发中，需要尽量避免使用全局变量。")]),t._v(" "),a("h2",{attrs:{id:"思考题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思考题"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E6%80%9D%E8%80%83%E9%A2%98",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("思考题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\na"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时 a.x 的值是多少")]),t._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这时 b.x 的值是多少")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://muyiy.cn/blog/1/1.3.html#%E5%8F%82%E8%80%83",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),a("OutboundLink")],1),t._v("参考")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/996671d4dcc4",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端基础进阶（一）：内存空间详细图解"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.oschina.net/translate/how-does-javascript-actually-work-part-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("解读 JavaScript 之引擎、运行时和堆栈调用"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xdd19910505/article/details/41900693",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript变量——栈内存or堆内存"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);