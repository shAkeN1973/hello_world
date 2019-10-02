var lists = document.getElementsByTagName('li');
for(var i = 0 , len = lists.length ; i < len ; i++){
    lists[ i ].onmouseover = function(){
        alert(i);    
    };
}