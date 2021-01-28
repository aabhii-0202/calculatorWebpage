function dis(val){ 
        document.getElementById("result").value+=val 
    } 
     
function solve(){ 
        let x = document.getElementById("result").value 
        let y = eval(x) 
        document.getElementById("result").value = y 
    } 
function del(){
       var x= document.getElementById("result").value;
       document.getElementById("result").value=x.substring(0,x.length-1)
    }

function clr(){ 
        document.getElementById("result").value = "" 
    } 