const count=document.getElementById("counter");
const addto=document.querySelectorAll(".add")
var num=0;
function myFunction() {
    if(num!=5){
        num=num+1;
        count.innerHTML=num; 
    }
    else{
        alert("Cant add more");
    }
    
}