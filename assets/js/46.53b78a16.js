(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{338:function(e,s,r){"use strict";r.r(s);var a=r(4),t=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前端不懂进程通信-看完这篇就懂了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端不懂进程通信-看完这篇就懂了"}},[e._v("#")]),e._v(" 前端不懂进程通信？看完这篇就懂了")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/n2_ZVbMvGQsKdElfPEW81w",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mp.weixin.qq.com/s/n2_ZVbMvGQsKdElfPEW81w"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("为什么前端要了解进程通信：")]),e._v(" "),s("p",[e._v("前端领域已经不是单纯写在浏览器里跑的页面就可以了，还要会 electron、nodejs 等，而这俩技术都需要掌握进程通信。")]),e._v(" "),s("p",[e._v("nodejs 是 js 的一个运行时，和浏览器不同，它扩展了很多封装操作系统能力的 api，其中就包括进程、线程相关 api，而学习进程 api 就要学习进程之间的通信机制。")]),e._v(" "),s("p",[e._v("electron 是基于 chromium 和 nodejs 的桌面端开发方案，它的架构是一个主进程，多个渲染进程，这两种进程之间也需要通信，要学习 electron 的进程通信机制。")]),e._v(" "),s("p",[e._v("这篇文章我们就来深入了解一下进程通信。")]),e._v(" "),s("p",[e._v("本文会讲解以下知识点：")]),e._v(" "),s("ul",[s("li",[e._v("进程是什么")]),e._v(" "),s("li",[e._v("本地进程通信的四种方式")]),e._v(" "),s("li",[e._v("ipc、lpc、rpc 都是什么")]),e._v(" "),s("li",[e._v("electron 如何做进程通信")]),e._v(" "),s("li",[e._v("nodejs 的 child_process 和 cluster 如何做进程通信")])]),e._v(" "),s("h2",{attrs:{id:"进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程"}},[e._v("#")]),e._v(" 进程")]),e._v(" "),s("p",[e._v("我们写完的代码要在操作系统之上跑，操作系统为了更好的利用硬件资源，支持了多个程序的并发和硬件资源的分配，分配的单位就是进程，这个进程就是程序的执行过程。比如记录程序执行到哪一步了，申请了哪些硬件资源、占用了什么端口等。")]),e._v(" "),s("p",[e._v("进程包括要执行的代码、代码操作的数据，以及进程控制块 PCB（Processing Control Block），因为程序就是代码在数据集上的执行过程，而执行过程的状态和申请的资源需要记录在一个数据结构（PCB）里。所以进程由代码、数据、PCB 组成。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/sz_mmbiz_png/t1UiaZAYaZ2rzJ4tTgWGhVZkRWbG8HEu6HshNVPOlRZ3tve4vUYMGzP6gmOvhnfemCVER9rYC2QNUia2qY3DBWFw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),s("p",[e._v("pcb 中记录着 pid、执行到的代码地址、进程的状态（阻塞、运行、就绪等）以及用于通信的信号量、管道、消息队列等数据结构。")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://mmbiz.qpic.cn/sz_mmbiz_png/t1UiaZAYaZ2rzJ4tTgWGhVZkRWbG8HEu6wQgTdXuqyfcsodGNvKLUE20Az7VdaXFQyO1yicryqh1jkyMsibzuGNaQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1",alt:"图片"}})]),e._v(" "),s("p",[e._v("进程从创建到代码不断的执行，到申请硬件资源（内存、硬盘文件、网络等），中间还可能会阻塞，最终执行完会销毁进程。这是一个进程的生命周期。")]),e._v(" "),s("p",[e._v("进程对申请来的资源是独占式的，每个进程都只能访问自己的资源，那进程之间怎么通信呢？")]),e._v(" "),s("h2",{attrs:{id:"进程通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程通信"}},[e._v("#")]),e._v(" 进程通信")]),e._v(" "),s("p",[e._v("不同进程之间因为可用的内存不同，所以要通过一个中间介质通信。")]),e._v(" "),s("h3",{attrs:{id:"信号量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#信号量"}},[e._v("#")]),e._v(" 信号量")]),e._v(" "),s("p",[e._v("如果是简单的标记，通过一个数字来表示，放在 PCB 的一个属性里，这叫做"),s("code",[e._v("信号量")]),e._v("，比如锁的实现就可以通过信号量。")]),e._v(" "),s("p",[e._v("这种信号量的思想我们写前端代码也经常用，比如实现节流的时候，也要加一个标记变量。")]),e._v(" "),s("h3",{attrs:{id:"管道"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管道"}},[e._v("#")]),e._v(" 管道")]),e._v(" "),s("p",[e._v("但是信号量不能传递具体的数据啊，传递具体数据还得用别的方式。比如我们可以通过读写文件的方式来通信，这就是"),s("code",[e._v("管道")]),e._v("，如果是在内存中的文件，叫做匿名管道，没有文件名，如果是真实的硬盘的文件，是有文件名的，叫做命名管道。")]),e._v(" "),s("p",[e._v("文件需要先打开，然后再读和写，之后再关闭，这也是管道的特点。管道是基于文件的思想封装的，之所以叫管道，是因为只能一个进程读、一个进程写，是单向的（半双工）。而且还需要目标进程同步的消费数据，不然就会阻塞住。")]),e._v(" "),s("p",[e._v("这种管道的方式实现起来很简单，就是一个文件读写，但是只能用在两个进程之间通信，只能同步的通信。其实管道的同步通信也挺常见的，就是 stream 的 pipe 方法。")]),e._v(" "),s("h3",{attrs:{id:"消息队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[e._v("#")]),e._v(" 消息队列")]),e._v(" "),s("p",[e._v("管道实现简单，但是同步的通信比较受限制，那如果想做成异步通信呢？加个队列做缓冲（buffer）不就行了，这就是"),s("code",[e._v("消息队列")]),e._v("。")]),e._v(" "),s("p",[e._v("消息队列也是两个进程之间的通信，但是不是基于文件那一套思路，虽然也是单向的，但是有了一定的异步性，可以放很多消息，之后一次性消费。")]),e._v(" "),s("h3",{attrs:{id:"共享内存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享内存"}},[e._v("#")]),e._v(" 共享内存")]),e._v(" "),s("p",[e._v("管道、消息队列都是两个进程之间的，如果多个进程之间呢？")]),e._v(" "),s("p",[e._v("我们可以通过申请一段多进程都可以操作的内存，叫做"),s("code",[e._v("共享内存")]),e._v("，用这种方式来通信。各进程都可以向该内存读写数据，效率比较高。")]),e._v(" "),s("p",[e._v("共享内存虽然效率高、也能用于多个进程的通信，但也不全是好处，因为多个进程都可以读写，那么就很容易乱，要自己控制顺序，比如通过进程的信号量（标记变量）来控制。")]),e._v(" "),s("p",[e._v("共享内存适用于多个进程之间的通信，不需要通过中间介质，所以效率更高，但是使用起来也更复杂。")]),e._v(" "),s("p",[e._v("上面说的这些几乎就是本地进程通信的全部方式了，为什么要加个本地呢？")]),e._v(" "),s("h2",{attrs:{id:"ipc、rpc、lpc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipc、rpc、lpc"}},[e._v("#")]),e._v(" ipc、rpc、lpc")]),e._v(" "),s("p",[e._v("进程通信就是 ipc（Inter-Process Communication），两个进程可能是一台计算机的，也可能网络上的不同计算机的进程，所以进程通信方式分为两种：")]),e._v(" "),s("p",[e._v("本地过程调用 LPC（local procedure call）、远程过程调用 RPC（remote procedure call）。")]),e._v(" "),s("p",[e._v("本地过程调用就是我们上面说的信号量、管道、消息队列、共享内存的通信方式，但是如果是网络上的，那就要通过网络协议来通信了，这个其实我们用的比较多，比如 http、websocket。")]),e._v(" "),s("p",[e._v("所以，当有人提到 ipc 时就是在说进程通信，可以分为本地的和远程的两种来讨论。")]),e._v(" "),s("p",[e._v("远程的都是基于网络协议封装的，而本地的都是基于信号量、管道、消息队列、共享内存封装出来的，比如我们接下来要探讨的 electron 和 nodejs。")]),e._v(" "),s("h2",{attrs:{id:"electron-进程通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#electron-进程通信"}},[e._v("#")]),e._v(" electron 进程通信")]),e._v(" "),s("p",[e._v("electron 会先启动主进程，然后通过 BrowserWindow 创建渲染进程，加载 html 页面实现渲染。这两个进程之间的通信是通过 electron 提供的 ipc 的 api。")]),e._v(" "),s("h3",{attrs:{id:"ipcmain、ipcrenderer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipcmain、ipcrenderer"}},[e._v("#")]),e._v(" ipcMain、ipcRenderer")]),e._v(" "),s("p",[e._v("主进程里面通过 ipcMain 的 on 方法监听事件")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import { ipcMain } from 'electron';\n\nipcMain.on('异步事件', (event, arg) => {\n  event.sender.send('异步事件返回', 'yyy');\n})\n")])])]),s("p",[e._v("渲染进程里面通过 ipcRenderer 的 on 方法监听事件，通过 send 发送消息")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import { ipcRenderer } from 'electron';\n\nipcRender.on('异步事件返回', function (event, arg) {\n  const message = `异步消息: ${arg}`\n})\n\nipcRenderer.send('异步事件', 'xxx')\n")])])]),s("p",[e._v("api 使用比较简单，这是经过 c++ 层的封装，然后暴露给 js 的事件形式的 api。")]),e._v(" "),s("p",[e._v("我们可以想一下它是基于哪种机制实现的呢？")]),e._v(" "),s("p",[e._v("很明显有一定的异步性，而且是父子进程之间的通信，所以是消息队列的方式实现的。")]),e._v(" "),s("h3",{attrs:{id:"remote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote"}},[e._v("#")]),e._v(" remote")]),e._v(" "),s("p",[e._v("除了事件形式的 api 外，electron 还提供了远程方法调用 rmi （remote method invoke）形式的 api。")]),e._v(" "),s("p",[e._v("其实就是对消息的进一步封装，也就是根据传递的消息，调用不同的方法，形式上就像调用本进程的方法一样，但其实是发消息到另一个进程来做的，和 ipcMain、ipcRenderer 的形式本质上一样。")]),e._v(" "),s("p",[e._v("比如在渲染进程里面，通过 remote 来直接调用主进程才有的 BrowserWindow 的 api。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { BrowserWindow } = require('electron').remote;\n\nlet win = new BrowserWindow({ width: 800, height: 600 });\nwin.loadURL('https://github.com');\n")])])]),s("p",[e._v("小结一下，electron 的父子进程通信方式是基于消息队列封装的，封装形式有两种，一种是事件的方式，通过 ipcMain、ipcRenderer 的 api 使用，另一种则是进一步封装成了不同方法的调用（rmi），底层也是基于消息，执行远程方法但是看上去像执行本地方法一样。")]),e._v(" "),s("h2",{attrs:{id:"nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[e._v("#")]),e._v(" nodejs")]),e._v(" "),s("p",[e._v("nodejs 提供了创建进程的 api，有两个模块：child_process 和 cluster。很明显，一个是用于父子进程的创建和通信，一个是用于多个进程。")]),e._v(" "),s("h3",{attrs:{id:"child-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#child-process"}},[e._v("#")]),e._v(" child_process")]),e._v(" "),s("p",[e._v("child_process 提供了 spawn、exec、execFile、fork 的 api，分别用于不同的进程的创建：")]),e._v(" "),s("h4",{attrs:{id:"spawn、exec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spawn、exec"}},[e._v("#")]),e._v(" spawn、exec")]),e._v(" "),s("p",[e._v("如果想通过 shell 执行命令，那就用 spawn 或者 exec。因为一般执行命令是需要返回值的，这俩 api 在返回值的方式上有所不同。")]),e._v(" "),s("p",[e._v("spawn 返回的是 stream，通过 data 事件来取，exec 进一步分装成了 buffer，使用起来简单一些，但是可能会超过 maxBuffer。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { spawn } = require('child_process'); \n\nvar app = spawn('node','main.js' {env:{}});\n\napp.stderr.on('data',function(data) {\n  console.log('Error:',data);\n});\n\napp.stdout.on('data',function(data) {\n  console.log(data);\n});\n")])])]),s("p",[e._v("其实 exec 是基于 spwan 封装出来的，简单场景可以用，有的时候要设置下 maxBuffer。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { exec } = require('child_process'); \n\nexec('find . -type f', { maxBuffer: 1024*1024 }(err, stdout, stderr) => { \n    if (err) { \n        console.error(`exec error: ${err}`); return; \n    }   \n    console.log(stdout); \n});\n")])])]),s("h4",{attrs:{id:"execfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execfile"}},[e._v("#")]),e._v(" execFile")]),e._v(" "),s("p",[e._v("除了执行命令外，如果要执行可执行文件就用 execFile 的 api：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { execFile } = require('child_process'); \n\nconst child = execFile('node', ['--version'], (error, stdout, stderr) => { \n    if (error) { throw error; } \n    console.log(stdout); \n});\n")])])]),s("h4",{attrs:{id:"fork"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork"}},[e._v("#")]),e._v(" fork")]),e._v(" "),s("p",[e._v("还有如果是想执行 js ，那就用 fork：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { fork } = require('child_process'); \n\nconst xxxProcess = fork('./xxx.js'); \nxxxProcess.send('111111'); \nxxxProcess.on('message', sum => { \n    res.end('22222'); \n});\n")])])]),s("h4",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),s("p",[e._v("简单小结一下 child_process 的 4 个 api：")]),e._v(" "),s("p",[e._v("如果想执行 shell 命令，用 spawn 和 exec，spawn 返回一个 stream，而 exec 进一步封装成了 buffer。除了 exec 有的时候需要设置下 maxBuffer，其他没区别。")]),e._v(" "),s("p",[e._v("如果想执行可执行文件，用 execFile。")]),e._v(" "),s("p",[e._v("如果想执行 js 文件，用 fork。")]),e._v(" "),s("h3",{attrs:{id:"child-process-的进程通信"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#child-process-的进程通信"}},[e._v("#")]),e._v(" child_process 的进程通信")]),e._v(" "),s("p",[e._v("说完了 api 我们来说下 child_process 创建的子进程怎么和父进程通信，也就是怎么做 ipc。")]),e._v(" "),s("h4",{attrs:{id:"pipe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pipe"}},[e._v("#")]),e._v(" pipe")]),e._v(" "),s("p",[e._v("首先，支持了 pipe，很明显是通过管道的机制封装出来的，能同步的传输流的数据。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { spawn } = require('child_process'); \n\nconst find = spawn('cat', ['./aaa.js']);\nconst wc = spawn('wc', ['-l']);  find.stdout.pipe(wc.stdin);\n")])])]),s("p",[e._v("比如上面通过管道把一个进程的输出流传输到了另一个进程的输入流，和下面的 shell 命令效果一样：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cat ./aaa.js | wc -l\n")])])]),s("h4",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[e._v("#")]),e._v(" message")]),e._v(" "),s("p",[e._v("spawn 支持 stdio 参数，可以设置和父进程的 stdin、stdout、stderr 的关系，比如指定 pipe 或者 null。还有第四个参数，可以设置 ipc，这时候就是通过事件的方式传递消息了，很明显，是基于消息队列实现的。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { spawn } = require('child_process');\n\nconst child = spawn('node', ['./child.js'], {\n    stdio: ['pipe', 'pipe', 'pipe', 'ipc'] \n}); \nchild.on('message', (m) => { \n    console.log(m); \n}); \nchild.send('xxxx');\n")])])]),s("p",[e._v("而 fork 的 api 创建的子进程自带了 ipc 的传递消息机制，可以直接用。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("const { fork } = require('child_process'); \n\nconst xxxProcess = fork('./xxx.js'); \nxxxProcess.send('111111'); \nxxxProcess.on('message', sum => { \n    res.end('22222'); \n});\n")])])]),s("h3",{attrs:{id:"cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[e._v("#")]),e._v(" cluster")]),e._v(" "),s("p",[e._v("cluster 不再是父子进程了，而是更多进程，也提供了 fork 的 api。")]),e._v(" "),s("p",[e._v("比如 http server 会根据 cpu 数启动多个进程来处理请求。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("import cluster from 'cluster';\nimport http from 'http';\nimport { cpus } from 'os';\nimport process from 'process';\n\nconst numCPUs = cpus().length;\n\nif (cluster.isPrimary) {\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n} else {\n  const server = http.createServer((req, res) => {\n    res.writeHead(200);\n    res.end('hello world\\n');\n  })\n  \n  server.listen(8000);\n  \n  process.on('message', (msg) => {\n    if (msg === 'shutdown') {\n       server.close();\n    }\n  });\n}\n")])])]),s("p",[e._v("它同样支持了事件形式的 api，用于多个进程之间的消息传递，因为多个进程其实也只是多个父子进程的通信，子进程之间不能直接通信，所以还是基于消息队列实现的。")]),e._v(" "),s("h4",{attrs:{id:"共享内存-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#共享内存-2"}},[e._v("#")]),e._v(" 共享内存")]),e._v(" "),s("p",[e._v("子进程之间通信还得通过父进程中转一次，要多次读写消息队列，效率太低了，就不能直接共享内存么？")]),e._v(" "),s("p",[e._v("现在 nodejs 还是不支持的，可以通过第三方的包 shm-typed-array 来实现，感兴趣可以看一下。")]),e._v(" "),s("p",[e._v("https://www.npmjs.com/package/shm-typed-array")]),e._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),s("p",[e._v("进程包括代码、数据和 PCB，是程序的一次执行的过程，PCB 记录着各种执行过程中的信息，比如分配的资源、执行到的地址、用于通信的数据结构等。")]),e._v(" "),s("p",[e._v("进程之间需要通信，可以通过信号量、管道、消息队列、共享内存的方式。")]),e._v(" "),s("ul",[s("li",[e._v("信号量就是一个简单的数字的标记，不能传递具体数据。")]),e._v(" "),s("li",[e._v("管道是基于文件的思想，一个进程写另一个进程读，是同步的，适用于两个进程。")]),e._v(" "),s("li",[e._v("消息队列有一定的 buffer，可以异步处理消息，适用于两个进程。")]),e._v(" "),s("li",[e._v("共享内存是多个进程直接操作同一段内存，适用于多个进程，但是需要控制访问顺序。")])]),e._v(" "),s("p",[e._v("这四种是本地进程的通信方式，而网络进程则基于网络协议的方式也可以做进程通信。")]),e._v(" "),s("p",[e._v("进程通信叫做 ipc，本地的叫做 lpc，远程的叫 rpc。")]),e._v(" "),s("p",[e._v("其中，如果把消息再封装一层成具体的方法调用，叫做 rmi，效果就像在本进程执行执行另一个进程的方法一样。")]),e._v(" "),s("p",[e._v("electron 和 nodejs 都是基于上面的操作系统机制的封装：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("elctron 支持 ipcMain 和 ipcRenderer 的消息传递的方式，还支持了 remote 的 rmi 的方式。")])]),e._v(" "),s("li",[s("p",[e._v("nodejs 有 child_process 和 cluster 两个模块和进程有关，child_process 是父子进程之间，cluster 是多个进程：")])]),e._v(" "),s("li",[s("ul",[s("li",[e._v("child_process 提供了用于执行 shell 命令的 spawn、exec，用于执行可执行文件的 execFile，用于执行 js 的 fork。提供了 pipe 和 message 两种 ipc 方式。")]),e._v(" "),s("li",[e._v("cluster 也提供了 fork，提供了 message 的方式的通信。")])])])]),e._v(" "),s("p",[e._v("当然，不管封装形式是什么，都离不开操作系统提供的信号量、管道、消息队列、共享内存这四种机制。")]),e._v(" "),s("p",[e._v("ipc 是开发中频繁遇到的需求，希望这篇文章能够帮大家梳理清楚从操作系统层到不同语言和运行时的封装层次的脉络。")])])}),[],!1,null,null,null);s.default=t.exports}}]);