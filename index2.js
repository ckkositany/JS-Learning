//6.Calculator challenge

let num1=8
let num2 =2
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent= num2
document.getElementById("sum-el")
let sumEl=document.getElementById("sum-el")

function Add(){
    let result =num1 + num2

sumEl.textContent= "sum:" + result 
}

function subtract(){
    let result =num1 - num2

sumEl.textContent= "sum:" + result 
}


function Divide(){
    let result =num1 / num2

sumEl.textContent= "sum:" + result 
}


function Multiply(){
    let result =num1 * num2

sumEl.textContent= "sum:" + result 
}


