# 关于this的理解
## 关于this对象
this对象是在运行时基于函数的执行环境绑定的，全局函数的this被绑定到window中，当函数被当作某个方法的对象调用时，this被绑定到那个对象中，但是由于匿名函数（闭包)的执行具有全局性，因此其this通常指向window。每个函数在调用时，其活动对象都会获得两个特殊变量，内部函数在搜索这两个变量时，只会搜索到其活动变量为止，因此永远无法访问到外部函数中的这两个变量。如果将外部作用域中的this对象保存在闭包能访问的变量中，就可以让闭包访问该变量了
```
var obJect={
    name : 'hello maboyu',

    getFucName : function()
    {
        var that=this;

        alert(this.name);
        return function(){
            alert(this.name);
            return that.name;
        };
    }
};
```