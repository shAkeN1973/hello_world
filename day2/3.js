var number=null;
var temp=null;
var upLoadArray=new Array();
var plans= {
  name: "",
  date: "",
  lengthOfTime: null,
  frenquency: null,
  afterOrBefore: null,
  }
function test1(plan){
    
    var name="a"
    //var toolplan=plans; 
    plan.name=name;
    upLoadArray.push(plan);
}
function test2(plan){
    var name="b";
    //var toolplan=plans; 
    plan.name=name;
    upLoadArray.push(plan);
}

test1(plans);
test2(plans);
console.log(upLoadArray);