var element= document.getElementsByClassName(button);
for(var i=0;i<element.length;i++){
    element[i].onclick = function(){
        alert("Finaly!");
    }
};