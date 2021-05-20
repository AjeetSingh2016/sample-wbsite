// initial value
let count = 0;

// selecting buttons and value

let value = document.getElementById('value');
// let btns = document.querySelectorAll(".btn");
let btnD = document.getElementById('btnD');
let btnR = document.getElementById('btnR');
let btnI = document.getElementById('btnI');

btnD.addEventListener('click', function(){
    count--;
    value.textContent = count;
    if(count<0){
        value.style.color = "red";
    }
    if(count===0){
        value.style.color = "black";
    }
    
});
btnR.addEventListener('click',function(){
    
    count = 0;
    value.textContent = count; 
    if(count===0){
        value.style.color = "black";
    }
});
btnI.addEventListener('click',function(){
    
    count++;

    value.textContent = count; 
    if(count>0){
        value.style.color = "green";
    }
    if(count===0){
        value.style.color = "black";
    }
    
});


