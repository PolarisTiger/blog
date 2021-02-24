# blog
polaris前端面试题
## 1.防抖节流

>函数防抖(debounce)  
在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

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
