var arr=new Array();
for(let i=0;i<3;i++)
{
    arr.push({abc:"123"+i.toString(),time:"10.20"})
}


var toolArray=new Array()

toolArray=arr;
toolArray[1].time="10.10";
console.log(toolArray,arr);