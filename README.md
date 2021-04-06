# 前端学习
polaris前端面试题
# 复习大纲
![image](https://user-gold-cdn.xitu.io/2020/4/11/1716702e3ebbac73?imageslim)

# HTML

## 1.html5新增标签
>header, footer, nav, video, canvas.

## 2.web work
>Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程（通常负责 UI 交互）就会很流畅，不会被阻塞或拖慢。  
Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。  
(注意)：子线程完全受主线程控制，且不得操作Dom，所以这个新标准并没有完全改变JavaScript单线程的本质。  

## 3.html语义化
1.  HTML结构清晰  
2.  代码可读性较好  
3.  无障碍阅读  
4.  搜索引擎可以根据标签的语言确定上下文和权重问题  
5.  移动设备能够更完美的展现网页（对css支持较弱的设备）  
6.  便于团队维护和开发  

# CSS

## 1.盒模型
标准盒模型：标准模式下总宽度=width+margin（左右）+padding（左右）border（左右）  
怪异盒模型：怪异模式下总宽度=width+margin（左右）（就是说width已经包含了padding和border值）  
>当设置为box-sizing:content-box时，将采用标准模式解析计算，也是默认模式；当设置为box-sizing:border-box时，将采用怪异模式解析计算；  

## 2.BFC
BFC(Block formatting context)直译为"块级格式化上下文"。
>BFC是一个独立的布局环境，其中的元素布局是不受外界的影响，并且在一个BFC中，块盒与行盒（行盒由一行中所有的内联元素所组成）都会垂直的沿着其父元素的边框排列。

## 3.css可替换元素
可替换元素（replacedelement）的展现效果不是由CSS来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于CSS的。  
简单来说，它们的内容不受当前文档的样式的影响。CSS可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。  
典型的可替换元素有<iframe><video><embed><img>，还有一些元素仅在特定情况下被作为可替换元素处理，比如<input>。  

## 4. css 选择器优先级
优先级关系：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器

## 5.flex布局

[30 分钟学会 Flex 布局](https://zhuanlan.zhihu.com/p/25303493)  

# JavaScript

## 1.防抖节流

函数防抖(debounce)  
>在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

>函数节流(throttle)  
规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。

[7分钟理解JS的节流、防抖及使用场景](https://juejin.cn/post/6844903669389885453)

## 2.判断js数据类型
>typeof 直接返回数据类型字段，但是无法判断数组、null、对象  
>instanceof 判断某个实例是不是属于原型  
>Object.prototype.toString.call()  

[javascript 判断数据类型的几种方法](https://segmentfault.com/a/1190000018160547)

## 3.数组方法
### `map`  
> map() 方法创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

### `filter`

## 4.原型、原型链

[原型与原型链](https://juejin.cn/post/6844903749345886216)

## 5.this指向

[理解JS中this指向的小技巧](https://juejin.cn/post/6844903476066009096)  
[巧妙理解call和apply](https://github.com/TerryBeanX2/Dive-Into-JS/tree/master/call-apply)  
[不得不说的原型与原型链](https://github.com/TerryBeanX2/Dive-Into-JS/tree/master/proto)  


## 6.闭包
[作用域链与闭包](https://segmentfault.com/a/1190000012646221)

## 15.js模块化
[说说js中模块化](https://juejin.cn/post/6844904154154926093)

# 浏览器

## 1.一次完整的http过程

当我们在web浏览器的地址栏中输入：www.baidu.com，具体发生了什么  
1.对www.baidu.com这个网址进行dns的解析，得到对应的ip地址  
2.根据这个ip，找到对应的服务器，发起tcp的三次握手  
3.建立tcp链接后发起http请求  
4.服务器相应http请求，浏览器得到html代码  
5.浏览器解析html代码，并请求html中的资源（如js。css。图片等）（先得到html代码，才能去找这些资源）  
6.浏览器对页面进行渲染呈现给用户  
7.服务器关闭tcp链接  

## 2.浏览器缓存

[深入理解浏览器缓存机制](https://www.jianshu.com/p/54cc04190252)  

## 3.Event Loop
[一次弄懂event loop](https://zhuanlan.zhihu.com/p/55511602)

## 4.执行上下文

[简书～执行上下文](https://www.jianshu.com/p/a6d37c77e8db) 

## 5.js为啥是单线程的
![image](https://user-images.githubusercontent.com/47661092/111959413-676c4180-8b29-11eb-8b98-b6daba1d2b36.png)

# 数据结构与算法

# 网络与安全

# React

## 1.react fiber

[React Fiber 原理介绍](https://segmentfault.com/a/1190000018250127)  

# 性能优化

## 1.前端性能优化

[前端性能优化 24 条建议（2020）](https://segmentfault.com/a/1190000022205291)  

# 技术趋势

## 1.框架和类库
[2021值得学习的框架和类库](https://juejin.cn/post/6935670539088461855)
