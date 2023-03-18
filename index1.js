//variables 
/*
let myAge = 18
console.log(myAge)
*/
/*
let myAge = 49
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge) */

//increments
/*
let bonuspoints = 50;
console.log(bonuspoints)
bonuspoints = bonuspoints + 50;

console.log(bonuspoints)
bonuspoints = bonuspoints - 75;

console.log(bonuspoints)
bonuspoints = bonuspoints + 45;

console.log(bonuspoints) */

// Lesson 8 Adding a button on the html

//l Lesson 9 using functions to write less codes

/*let lap1 = 33;
let lap2 = 34;
let lap3 = 36;
// function to console log total
/*
function total(){
    total= lap1 + lap2 + lap3
    console.log(total)

}
total() */

//create a function that increments the lapcompleted variables with 1
/*
let lapsCompleted = 0;

function increase(){
    lapsCompleted = lapsCompleted + 1;
    console.log(lapsCompleted)

}
increase()
increase()
increase() */
// initialize the count as 0
//listen for clicks on the increment button
//implement the count variable when the count is clicked
//change the count-el in the html to reflect the new count

/*let count = 0;
let countEl = document.getElementById("count-el") //passing arguments

function increment(){


    count += 1;
    countEl.textContent = count //know the differnce between .innertxt and .textcontent
    console.log(count)
} 

 

//lesson 10 to display the count
//document.getElementById("count-el").innerText=0;
/*
document.getElementById("count-el")
let countEl= document.getElementsById("count-el")
countEl.innerText=count
*/

//lesson eleven the DOM-this is a document object model (just a way of using javascript to modify websites)

//lesson 16 to display the count with innertext


//lesson 17 to create a save button
/*let saveEl=document.getElementById("save-el")

function save(){
    
    let Countstrng=count + " - "
    saveEl.textContent += Countstrng
    //lesson 22 setting the count to 0
    countEl.textContent=0
    count=0
    console.log(count)

} 


// lesson 18: What is a string?

// create a var message that says you have three new notifications

/*let username="Sitonik"

let message = "You have three new notifications"
let messageToUser= username + ", " + message 
console.log(messageToUser)
*/
//lesson 20: log a greeting to the console
/*let Name= "Paul Sitonik"
let greetings="Hello my name is "
let myGreetings =greetings + ", " + Name
console.log(myGreetings)
*/
 /*//Lesson 21 strings vs numbers
//consider the following
console.log(2 + "4")
//and
console.log(2 +4)
//and
console.log("2" + "4")
*/

// lesson 22: Render a welcome message
//document.getElementById ("welcome-el")
/*let welcomeEl= document.getElementById("welcome-el")
let Name = "Paulo Sitonik"
let greetings ="Welcome back "
welcomeEl.innerText= greetings + Name
welcomeEl.innerTex += "!!"
*/
/*
RECAP
I have learntand implemnted:
script tags 
variables 
numbers 
strings
console.log()
the DOM(document object module)
how to getElementById
importance of .textContent over .innerText

*/
//quick challenges
// 1.variables
/*let firstName= "Ruth "
let lastName= "Gitau"
let fullName =firstName + lastName
console.log(fullName)
*/
// 2.concatenate two strings in a function
/*let Name = "Linda"
let greetings="Hi there"
function myGreetings(){
    let greet=greetings + "," +Name + "!!"
    console.log(greet)
}
myGreetings()
*/

/*//3.increments and decrements
let myPoints=3

function add3Points(){
myPoints += 3


}

function remove1point(){
    myPoints -= 1

}

add3Points()
add3Points()
add3Points()
remove1point()
remove1point()
console.log(myPoints)
*/
/*
//4. strings and numbers
console.log("2" + 2)
console.log("My points are:" + 5 + 9)//strings are dominant over numbers hence js will assume the 5&9 as stringshence cocatenation
*/
/*
//5. Rendering an error message

let errorPar=document.getElementById("error")
function purchase()
{
errorPar.textContent="Something went wrong please try again later!"
    
}
*/
/*
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
*/

