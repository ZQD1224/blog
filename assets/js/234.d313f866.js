(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{522:function(e,n,t){"use strict";t.r(n);var a=t(4),s=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"面试官不要再问我axios了-我能手写简易版的axios"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#面试官不要再问我axios了-我能手写简易版的axios"}},[e._v("#")]),e._v(" 面试官不要再问我axios了？我能手写简易版的axios")]),e._v(" "),n("blockquote",[n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/kALHt6mWupqY_n6t0Cmw-g",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/kALHt6mWupqY_n6t0Cmw-g"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("axios作为我们工作中的常用的ajax请求库，作为前端工程师的我们当然是想一探究竟，axios究竟是如何去架构整个框架，中间的拦截器、适配器、 取消请求这些都是我们经常使用的。")]),e._v(" "),n("h1",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),n("p",[e._v("由于axios源码中有很多不是很重要的方法，而且很多方法为了考虑兼容性，并没有考虑到用es6 的语法去写。本篇主要是带你去梳理axios的主要流程，并用es6重写简易版axios")]),e._v(" "),n("ul",[n("li",[e._v("拦截器")]),e._v(" "),n("li",[e._v("适配器")]),e._v(" "),n("li",[e._v("取消请求")])]),e._v(" "),n("h1",{attrs:{id:"拦截器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拦截器"}},[e._v("#")]),e._v(" 拦截器")]),e._v(" "),n("p",[e._v("一个axios实例上有两个拦截器，一个是请求拦截器， 然后响应拦截器。我们下看下官网的用法：")]),e._v(" "),n("p",[e._v("添加拦截器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 添加请求拦截器\naxios.interceptors.request.use(function (config) {\n    // 在发送请求之前做些什么\n    return config;\n  }, function (error) {\n    // 对请求错误做些什么\n    return Promise.reject(error);\n  });\n")])])]),n("p",[e._v("移除拦截器")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const myInterceptor = axios.interceptors.request.use(function () {/*...*/});\naxios.interceptors.request.eject(myInterceptor);\n")])])]),n("p",[e._v("其实源码中就是，所有拦截器的执行 所以说肯定有一个forEach方法。")]),e._v(" "),n("p",[e._v("思路理清楚了，现在我们就开始去写吧。代码我就直接发出来，然后我在下面注解。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export class InterceptorManager {\n  constructor() {\n    // 存放所有拦截器的栈\n    this.handlers = []\n  }\n\n  use(fulfilled, rejected) {\n    this.handlers.push({\n      fulfilled,\n      rejected,\n    })\n    //返回id 便于取消\n    return this.handlers.length - 1\n  }\n  // 取消一个拦截器\n  eject(id) {\n    if (this.handlers[id]) {\n      this.handlers[id] = null\n    }\n  }\n\n  // 执行栈中所有的hanlder\n  forEach(fn) {\n    this.handlers.forEach((item) => {\n      // 这里为了过滤已经被取消的拦截器，因为已经取消的拦截器被置null\n      if (item) {\n        fn(item)\n      }\n    })\n  }\n}\n")])])]),n("p",[e._v("拦截器这个类我们已经初步实现了，现在我们去实现axios 这个类，还是先看下官方文档，先看用法，再去分析。")]),e._v(" "),n("p",[n("strong",[e._v("axios(config)")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 发送 POST 请求\naxios({\n  method: 'post',\n  url: '/user/12345',\n  data: {\n    firstName: 'Fred',\n    lastName: 'Flintstone'\n  }\n});\n")])])]),n("h6",{attrs:{id:"axios-url-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#axios-url-config"}},[e._v("#")]),e._v(" axios(url[, config])")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 发送 GET 请求（默认的方法） \naxios('/user/12345');\n")])])]),n("p",[e._v("Axios 这个类最核心的方法其实还是 request 这个方法。我们先看下实现吧")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("class Axios {\n  constructor(config) {\n    this.defaults = config\n    this.interceptors = {\n      request: new InterceptorManager(),\n      response: new InterceptorManager(),\n    }\n  }\n  // 发送一个请求\n  request(config) {\n    // 这里呢其实就是去处理了 axios(url[,config])\n    if (typeof config == 'string') {\n      config = arguments[1] || {}\n      config.url = arguments[0]\n    } else {\n      config = config || {}\n    }\n\n    // 默认get请求，并且都转成小写\n    if (config.method) {\n      config.method = config.method.toLowerCase()\n    } else {\n      config.method = 'get'\n    }\n\n    // dispatchRequest 就是发送ajax请求\n    const chain = [dispatchRequest, undefined]\n    //  发生请求之前加入拦截的 fulfille 和reject 函数\n    this.interceptors.request.forEach((item) => {\n      chain.unshift(item.fulfilled, item.rejected)\n    })\n    // 在请求之后增加 fulfilled 和reject 函数\n    this.interceptors.response.forEach((item) => {\n      chain.push(item.fulfilled, item.rejected)\n    })\n\n    // 利用promise的链式调用，将参数一层一层传下去\n    let promise = Promise.resolve(config)\n\n    //然后我去遍历 chain\n    while (chain.length) {\n      // 这里不断出栈 直到结束为止\n      promise = promise.then(chain.shift(), chain.shift())\n    }\n    return promise\n  }\n}\n")])])]),n("p",[e._v("这里其实就是体现了axios设计的巧妙， 维护一个栈结构 + promise 的链式调用 实现了 拦截器的功能， 可能有的小伙伴到这里还是不是很能理解，我还是给大家画一个草图去模拟下这个过程。")]),e._v(" "),n("p",[e._v("假设我有1个请求拦截器handler和1个响应拦截器handler")]),e._v(" "),n("p",[e._v("一开始我们栈中的数据就两个")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("这个没什么问题，由于有拦截器的存在，如果存在的话，那么我们就要往这个栈中加数据，请求拦截器顾名思义要在请求之前所以是unshift。加完请求拦截器我们的栈变成了这样")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("没什么问题，然后请求结束后，我们又想对请求之后的数据做处理，所以响应拦截的数据自然是push了。这时候栈结构变成了这样：")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("然后遍历整个栈结构，每次出栈都是一对出栈， 因为promise 的then 就是 一个成功，一个失败嘛。遍历结束后，返回经过所有处理的promise，然后你就可以拿到最终的值了。")]),e._v(" "),n("h1",{attrs:{id:"adapter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adapter"}},[e._v("#")]),e._v(" adapter")]),e._v(" "),n("p",[e._v("Adapter: 英文解释是适配器的意思。这里我就不实现了，我带大家看一下源码。adapter 做了一件事非常简单，就是根据不同的环境 使用不同的请求。如果用户自定义了adapter，就用config.adapter。否则就是默认是default.adpter.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" var adapter = config.adapter || defaults.adapter;\n\n return adapter(config).then() ...\n")])])]),n("p",[e._v("继续往下看deafults.adapter做了什么事情：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("function getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = require('./adapters/xhr');\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = require('./adapters/http');\n  }\n  return adapter;\n}\n")])])]),n("p",[e._v("其实就是做个选择：如果是浏览器环境：就是用xhr 否则就是node 环境。判断process是否存在。从写代码的角度来说，axios源码的这里的设计可扩展性非常好。有点像设计模式中的"),n("strong",[e._v("适配器模式")]),e._v("， 因为浏览器端和node 端 发送请求其实并不一样， 但是我们不重要，我们不去管他的内部实现，用promise包一层做到对外统一。所以 我们用axios 自定义adapter 器的时候, 一定是返回一个promise。ok请求的方法我在下面模拟写出。")]),e._v(" "),n("h1",{attrs:{id:"cancletoken"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cancletoken"}},[e._v("#")]),e._v(" cancleToken")]),e._v(" "),n("p",[e._v("我首先问大家一个问题，取消请求原生浏览器是怎么做到的？有一个abort 方法。可以取消请求。那么axios源码肯定也是运用了这一点去取消请求。现在浏览器其实也支持fetch请求， fetch可以取消请求？很多同学说是不可以的，其实不是？fetch 结合 abortController 可以实现取消fetch请求。我们看下例子：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('const controller = new AbortController();\nconst { signal } = controller;\n\nfetch("http://localhost:8000", { signal }).then(response => {\n    console.log(`Request 1 is complete!`);\n}).catch(e => {\n    console.warn(`Fetch 1 error: ${e.message}`);\n});\n// Wait 2 seconds to abort both requests\nsetTimeout(() => controller.abort(), 2000);\n')])])]),n("p",[e._v("但是这是个实验性功能，可恶的ie。所以我们这次还是用原生的浏览器xhr基于promise简单的封装一下。代码如下：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export function dispatchRequest(config) {\n  return new Promise((resolve, reject) => {\n    const xhr = new XMLHttpRequest()\n    xhr.open(config.method, config.url)\n    xhr.onreadystatechange = function () {\n      if (xhr.status >= 200 && xhr.status <= 300 && xhr.readyState === 4) {\n        resolve(xhr.responseText)\n      } else {\n        reject('失败了')\n      }\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!xhr) {\n          return\n        }\n        xhr.abort()\n        reject(cancel)\n        // Clean up request\n        xhr = null\n      })\n    }\n    xhr.send()\n  })\n}\n")])])]),n("p",[e._v("Axios 源码里面做了很多处理， 这里我只做了get处理，我主要的目的就是为了axios是如何取消请求的。先看下官方用法:")]),e._v(" "),n("p",[e._v("主要是两种用法：")]),e._v(" "),n("p",[e._v("使用 "),n("em",[e._v("cancel token")]),e._v(" 取消请求")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const CancelToken = axios.CancelToken;\nconst source = CancelToken.source();\n\naxios.get('/user/12345', {\n  cancelToken: source.token\n}).catch(function(thrown) {\n  if (axios.isCancel(thrown)) {\n    console.log('Request canceled', thrown.message);\n  } else {\n     // 处理错误\n  }\n});\n\naxios.post('/user/12345', {\n  name: 'new name'\n}, {\n  cancelToken: source.token\n})\n\n// 取消请求（message 参数是可选的）\nsource.cancel('Operation canceled by the user.');\n")])])]),n("p",[e._v("还可以通过传递一个 executor 函数到 "),n("code",[e._v("CancelToken")]),e._v(" 的构造函数来创建 cancel token：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const CancelToken = axios.CancelToken;\nlet cancel;\n\naxios.get('/user/12345', {\n  cancelToken: new CancelToken(function executor(c) {\n    // executor 函数接收一个 cancel 函数作为参数\n    cancel = c;\n  })\n});\n\n// cancel the request\ncancel();\n")])])]),n("p",[e._v("看了官方用法 和结合axios源码：我给出以下实现:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export class cancelToken {\n    constructor(exactor) {\n        if (typeof executor !== 'function') {\n        throw new TypeError('executor must be a function.')\n        }\n        // 这里其实将promise的控制权 交给 cancel 函数\n        // 同时做了防止多次重复cancel 之前 Redux 还有React 源码中也有类似的案列\n        const resolvePromise;\n        this.promise =  new Promise(resolve => {\n            resolvePromise = resolve;\n        })\n        this.reason = undefined;\n        \n        const cancel  = (message) => {\n            if(this.reason) {\n                return;\n            }\n            this.reason = 'cancel' + message;\n            resolvePromise(this.reason);\n        }\n        exactor(cancel)\n    }\n\n    throwIfRequested() {\n        if(this.reason) {\n            throw this.reason\n        }\n    }\n    \n    // source 其实本质上是一个语法糖 里面做了封装\n    static source() {\n        const cancel;\n        const token = new cancelToken(function executor(c) {\n            cancel = c;\n        });\n        return {\n            token: token,\n            cancel: cancel\n        };\n    }\n\n}\n")])])]),n("p",[e._v("截止到这里大体axios 大体功能已经给出。")]),e._v(" "),n("p",[e._v("接下来我就测试下我的手写axios 有没有什么问题？")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" <script type=\"module\" >\n    import Axios from './axios.js';\n    const config = { url:'http://101.132.113.6:3030/api/mock' }\n    const axios =  new Axios();\n    axios.request(config).then(res => {\n        console.log(res,'0000')\n    }).catch(err => {\n        console.log(err)\n    })\n<\/script>\n")])])]),n("p",[e._v("打开浏览器看一下结果：")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("成功了ok, 然后我来测试一下拦截器的功能：代码更新成下面这样：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("import Axios from './axios.js';\nconst config = { url:'http://101.132.113.6:3030/api/mock' }\nconst axios =  new Axios();\n// 在axios 实例上挂载属性\nconst err = () => {}\naxios.interceptors.request.use((config)=> {\n    console.log('我是请求拦截器1')\n    config.id = 1;\n    return  config\n},err )\naxios.interceptors.request.use((config)=> {\n    config.id = 2\n    console.log('我是请求拦截器2')\n    return config\n},err)\naxios.interceptors.response.use((data)=> {\n    console.log('我是响应拦截器1',data )\n    data += 1;\n    return data;\n},err)\naxios.interceptors.response.use((data)=> {\n    console.log('我是响应拦截器2',data )\n    return  data\n},err)\naxios.request(config).then(res => {\n    // console.log(res,'0000')\n    // return res;\n}).catch(err => {\n    console.log(err)\n})\n")])])]),n("p",[e._v("ajax 请求的结果 我是resolve(1) ，所以我们看下输出路径：")]),e._v(" "),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("没什么问题， 响应后的数据我加了1。")]),e._v(" "),n("p",[e._v("接下来我来是取消请求的两种方式")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 第一种方式\nlet  cancelFun = undefined;\nconst cancelInstance = new cancelToken((c)=>{\n    cancelFun = c;\n});\nconfig.cancelToken = cancelInstance;\n// 50 ms 就取消请求\nsetTimeout(()=>{\n    cancelFun('取消成功')\n},50)\n\n第二种方式：\nconst { token, cancel }  = cancelToken.source();\nconfig.cancelToken = token;\nsetTimeout(()=>{\n    cancel()\n},50)\n")])])]),n("p",[n("img",{attrs:{src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==",alt:"图片"}})]),e._v(" "),n("p",[e._v("结果都是OK的,至此axios简单源码终于搞定了。")]),e._v(" "),n("h1",{attrs:{id:"反思"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#反思"}},[e._v("#")]),e._v(" 反思")]),e._v(" "),n("p",[e._v("本篇文章只是把axios源码的大体流程走了一遍， axios源码内部还是做了很多兼容比如：配置优先级：他有一个mergeConfig 方法， 还有数据转换器。不过这些不影响我们对axios源码的整体梳理， 源码中其实有一个createInstance，至于为什么有？我觉得就是为了可扩展性更好， 将来有啥新功能，直接在原有axios的实例的原型链上去增加，代码可维护性强， axios.all spread 都是实例new出来再去挂的，不过都很简单，没啥的。有兴趣大家自行阅读。")])])}),[],!1,null,null,null);n.default=s.exports}}]);