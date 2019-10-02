# 闭包
## 闭包的概念
[我也不知道是哪的文章，看起来很牛逼）](https://juejin.im/post/5cf8612df265da1bcb4f1bf8)
很长时间以来对闭包的理解仅限于在函数内创建另一个函数，但是学习过程中发现并不是这么一回事，
我们来看一个定义：
>>闭包是函数和声明该函数的词法环境的组合。--MDN

看不懂。。再来看一个定义
>>当函数能够记住并访问所在的词法作用域时，就产生了闭包。

详情请看/code/this.js
```
let single = (function(){
  let count = 0
  return {
    plus(){
      count++
      return count
    },
    minus(){
      count--
      return count
    }
  }
})()
single.plus() // 1
single.minus() // 0
```
>>这是个单例模式，这个模式返回了一个对象并赋值给变量single，变量single中包含两个函数plus和minus，而这两个函数都用到了所在词法作用域中的变量count。正常情况下count和所在的执行上下文会在函数执行结束时被销毁，但是由于count还在被外部环境使用，所以在函数执行结束时count和所在的执行上下文不会被销毁，这就产生了闭包。每次调用single.plus()或者single.minus()，就会对闭包中的count变量进行修改，这两个函数就保持住了对所在的词法作用域的引用。
>>闭包其实是一种特殊的函数，它可以访问函数内部的变量，还可以让这些变量的值始终保持在内存中，不会在函数调用后被垃圾回收机制清除。


在day1/day3/2.js中，可以看到，输出了10次10，这是因为在这条语句中
`document.write(test1[i]()+"<br/>");//every function outputs 10`
和这条语句中
`var test1=creatFunctions();`
可以看到，test1执行完毕，全局变量的活动对象中的i已经被赋值为10，且这个i并没有被销毁，因此在执行下一条语句的时候被全是10 





