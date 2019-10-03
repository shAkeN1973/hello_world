# 闭包
## 闭包的概念
闭包指有权访问另一个函数作用域中的变量的函数，创建闭包的常用方式，就是在一个函数中创建另一个函数
## 闭包的实现方式
```
function outter(name){
    return function(obj1,obj2)
    {
        var value1=obj1.name;
        var value2=obj2.name;
        if(value1<value2){
        return -1;}
    };
}
```
在这个例子中，`var value1=obj1.name`访问了外部函数中的变量name，之所以能访问这两个变量，是因为内部函数的域作用链中包含了outter的作用于域。必须理解函数第一次被调用发生了什么事情
### 函数第一次被调用发生了什么事情
当一个函数第一次被调用时，会创建一个执行环境和相应的作用域链，并把作用域链赋给一个特殊的内部属性([[scope]])，然后使用this和arguments和其他命名参数的值来初始化函数的活动对象，但在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，直至作为作用域链终点的全局作用环境.
在调用outter时，会创建一个执行环境，然后通过复制函数的SCOPE属性中的对象构建起执行环境中的域作用链，此后，有一个活动对象（此时被当作变量对象使用）被创建并推入执行环境作用域链的前端，作用域链本质其实是一个指向变量的指针列表，并不包含实际的变量对象。
在一个函数中定义的另一个函数会将包含函数（外部函数)的活动对象添加到自己的作用域链中，实际上将包含外部函数中的活动对象，在外部函数执行完毕后，其活动对象并不会被销毁，因为匿名函数的域作用链仍然在引用这个活动对象，活动对象仍然存留在内存中（匿名函数的执行具有全局性），当匿名函数被销毁后，外部函数的活动对象才会被销毁。
#### 关于活动对象，执行环境和变量对象
>>执行环境定义了变量或函数有权访问其他的数据，决定了他们各自的行为，每个执行环境中都有与之关联的变量对象，这个变量对象中保存了环境中定义的所有变量和数据，我们无法直接用代码访问这个对象。当某个执行环境中的所有代码执行完毕，这个环境就会被销毁，其中的所有变量和对象也会被销毁。每个函数在执行时也会创建一个执行环境，当代码在一个环境中执行时，会创建一个由环境对象构成的作用域链，如果这个环境是函数，则将其活动对象作为变量对象。活动对象在最开始时只包含一个变量即argument，作用域链中的下一个对象来自外部执行环境。
## 闭包与变量
闭包只能获得包含函数中的最后一个值，看下面的例子
```
function cFunction()
{
    var result= new Array();
    for(var i=0;i<10;i++)
    {
        result[i]=function(){
            return i;
        }
    };
    return result;
}


var fucn1=cFunction();
alert(fucn1[1]);   \\function(){return i};
for(var i=0;i<fucn1.length;i++)
{
    document.write(fucn1[i]()+'<br />');
}
```
上面的函数中，在执行完`var fucn1=cFunction();`后，里面包含的实际上是匿名函数function（对象）在进行`fucn1[i]();`后匿名函数才会被执行，但此时匿名函数的作用域链中包含了cFucntion的变量对象，其中i=10，因此只会输出10个i
改进方法：
```
function cFunction()
{
    var result= new Array();
    for(var i=0;i<10;i++)
    {
        result[i]=function(num){
            return function(){
                return num;
            };
        }(i);
    }
    return result;
}


var fucn1=cFunction();
alert(fucn1[1]);   \\function(){return i};
for(var i=0;i<fucn1.length;i++)
{
    document.write(fucn1[i]()+'<br />');
}
```