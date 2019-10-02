function creatFunctions(){
    var result= new Array();
    for(var i=0;i<10;i++)
    {
        result[i]=function(){ //creat an another anoumous function to make the function work
            console.log(i);
                return i;
        };
    }
    
    return result;
    
}

var test1=creatFunctions();
alert(test1[1]);

for(var i=0;i<test1.length;i++)
{
    document.write(test1[i]()+"<br/>");//every function outputs 10
}
