var name='hello world';

var object={
    name : 'hello maboyu',

    getFucName : function()
    {
        alert(this.name);
        return function(){
            alert(this.name);
            return this.name;
        };
    }
};


console.log(object.getFucName()()); //goes out with hello world

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

console.log(obJect.getFucName()());
object.getFucName=null;
obJect.getFucName=null;