/*function outter(name){
    return function(obj1,obj2)
    {
        var value1=obj1.name;
        var value2=obj2.name;
        if(value1<value2){
        return -1;}
    };
}

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
alert(fucn1[1]);
for(var i=0;i<fucn1.length;i++)
{
    document.write(fucn1[i]()+'<br />');
}
*/
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
alert(fucn1[0]);   //function(){return i};
for(var i=0;i<fucn1.length;i++)
{
    document.write(fucn1[i]()+'<br />');
}