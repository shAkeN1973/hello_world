var fireName='john',lastName='Smith';

function switchName(x,y) {
    var that=this;
    that.x='ma';
    that.y='boyu';
}
switchName(fireName,lastName);
console.log(x,y);
console.log(fireName,lastName);