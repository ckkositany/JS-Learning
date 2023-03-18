//Session 3 Building a black Jack Game

//lessson 1 Lets bulid a black jack game

let cards=[]
let sum = 0
let hasBlackJack =false
let isAlive=false // Lesson 8: Adding isAlive variable
let message= ""    // Adding a message variable
let playerEL=document.getElementById("player-el")
//lesson 49 Object sneak peek seen on line 11 to 16
let player={ 
    Name:"Per",
    chips:145
}
playerEL.textContent=player.Name + ": $" + player.chips
//storing the message-el par in a variable called messageEl
let messageEl=document.getElementById("message-el")
//lesson 15 to display the sum
let sumEl=document.getElementById("sum-el")
//let sumEl=document.querySelector("#sum-el") //we use the querry selector instead of getelementbyid so as to capture the css part of that specific element
// continuation... when we use the class identifier on the html part we beigin with a period eg.   (document.queryselector(".sum-el")) instead of("#sum-el")

// lesson 16 to display the cards
let cardEl=document.getElementById("card-el")
//if statements
// creating a function for the start function
// returning values in function
function getRandomCard(){
    
let randomNum= Math.floor(Math.random()*13) + 1 //making the function to return a random number in the game
// completing the getRandom function by use of conditions
if (randomNum>10){
    return 11
}
else if(randomNum===1){
    return 11
}
else {
    return randomNum
}
}
console.log (getRandomCard())

// 
//lesson 43 assigning values in the startgame function
function startgame(){
    isAlive=true
    let firstCard =getRandomCard()
let secondCard= getRandomCard()
 cards=[firstCard,secondCard]
sum= firstCard + secondCard
    renderGame()
}
function renderGame(){ // lesson 19 renaming the function start game
    //lesson 20 solving our cards problem with an array
cardEl.textContent= "Cards: "
    for (let i=0; i<cards.length; i++){
        cardEl.textContent +=cards[i] + " "
        }

    console.log ("game started")
if (sum<=20){
    message=("Do you want to draw a new card?")
}
else if(sum===21){

    message=("You've got BlackJack")
    hasBlackJack=true
}
else {
    message=("You are out of the game")
    isAlive=false
}
//CASHOUT

messageEl.textContent=message
sumEl.textContent="Sum:" + sum
//rendering first and secondcard

//rendering all the cards using an array i.e replacing first and second card with array
}
// lesson 17 new card function
function newcard(){ // lesson 18 add to the sum when the new card is clicked
    // lesson 48 to only triger newcard if you are allowed to using the logical operators
    if (isAlive===true && hasBlackJack===false){
   
    let thirdCard= getRandomCard()
    sum +=thirdCard
    cards.push(thirdCard)
    }
    
renderGame()
    console.log("new card drawn")
}
 
 
//console.log(cardEl)

//lesson 2 if else conditionals
//example to check if one can enter the club
/*let Age = 22
if (Age<21){
    console.log("You cannot enter the club")
}
else{
    console.log("You are welcome!!")
}*/

/*let age=105
if(age<100){
    console.log("You are not eligible!!")
}
else if(age===100)//Know the difference btn === and == 
{
    console.log("Here is your birthday card  from the king")
}
else {
    console.log("You have already had your birthday card!!")
}
*/  

/*
// ARRAYS PRACTISE
let exprience=["Ceo at scrimba", "Front-end developer at 1to1mobile", "People counter"]
console.log(exprience[1])
console.log(exprience[2])
console.log(exprience[0])
*/
/*
//lesson 23 Arrays with multiple datatypes
// create an array that describes yourself and should contain the three datatypes
let mySelf=["my name is Anonymous","am aged", 23, "doeslike pizza",true]
console.log(mySelf)
// Adding and removing items from an array
// we use .push to add 
// example
let newme= "Am tall dark and handsome just like me"
mySelf.push(newme)
console.log(mySelf)
mySelf.pop()
console.log(mySelf) 
*/
/*
// lesson 19 counting using ther for loops
//loops allow you to repeat a set of instructions several times 
//for loops has the initialization,condition and the increment or decrement
// example :
for (let num=0; num<= 15; num++)//let num is the initialization, (num<=15) is the conditon and (num++) is the increment
console.log(num)
//the while loop is majorly when you dont know how many times tou want to reapt the loops but you know the conditions that must be met for the loop to continue
// the semicolon inside the loop is used to end the statement

for (let count=10; count<=100; count+=10){
   console.log(count)}

// writing an array based loop
let numbers=[9,8,7,6,5,4,3,2,1]
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
}
*/
//Lesson 31 for loops arrays and the DOM 
/*
//lesson 34 returning values in functions
let player1time= 102
let player2time=107

function total(){
let sum =player1time + player2time
    return sum
}
let totalRaceTime= total()
console.log(totalRaceTime)
*/
/*
//lesson 36 generating random numbers with Math.random()
// math.random generates numbers between 0 and 1 (not inclusive of 1 since it generates the floating points alone)
let randomnum= Math.random()
console.log(randomnum)
The diffrence between math.random and math.floor is that 
math.random() is used to generate random decimal numbers and while
math.floor?() is used to round numbers down to the nearst interger 
*/
/*
//lesson 37 Math.random () *6
let randomNum=Math.random() * 6

//math.floor() this removes the floating points of the number i.e the points
function rolldice(){

    let floatNUM= Math.floor(randomNum) + 1
    return floatNUM
    
}
console.log(rolldice())
*/
/*
// Lesson 45 the Logical AND operator
function showSolution(){
    console.log("Showing solution...")
}
let hasSolvedChallenge= false
let hasHintsLeft=false
if (hasSolvedChallenge===false && hasHintsLeft===false){
    showSolution()
}
*/
/*
//lesson 47 the logical OR operator ||
let likesDocumentaries= true
let likesStartups= false
function recomendMovie(){

    console.log("Hey, check out this new film we think yu like")
}
if (likesDocumentaries===true || likesStartups===true){
    recomendMovie()
}
*/
//lesson 49 object sneak peek
/*
// lesson 50 intro to Objects
let castle={
    location: "Nairobi",
    IsOpenDaliy:true,
    capacity:1000
}
console.log(castle.location)
console.log(castle.IsOpenDaliy)
console.log(castle.capacity)
console.log(castle.location)
*/
//lesson 53 methods on objects
/*
//Methods are just functions inside the objects for example:
let introduction={
    Name:"Corne",
    greeetings: function(){
        console.log("Helloo")
    }
}
console.log(introduction.greeetings()) //here intro is the object while greetings is a function
*/
/*
//Summing up things covered
-Arrays
Objects
booleans
if else statements 
comparison operators (====,==,<=)
Logical operators
for loops 
return key word
math objects 
*/
//test quizes
/*
1
let person={
    Name:"kositany",
    age:18,
    country:"kenya"

}
function logData(){
    let data=person.Name + " is " + " " + person.age + "years old and lives in " + person.country
    console.log(data)
}
console.log(logData())
*/
/*
2
let largestCountries=["China","India","Usa","Indonesia","Parkistan"]

for (let i=0; i<largestCountries.length; i++){
    //console.log(largestCountries[i])
}
//the push(), pull(), unshift(),shift()
let Bigcountries=["China","India","Usa","Indonesia","Parkistan"]
Bigcountries.push("Kenya")
//Bigcountries.pop()
Bigcountries.shift()
Bigcountries.unshift("Uganda")
console.log(Bigcountries)
for (let i=0; i<Bigcountries.length; i++){
    console.log( "-" +Bigcountries[i])
}
// inferences :
//unshift adds a datatype at the FIRST position in the array
//shift removes datatype in the FIRST position in an array
// push adds datatype at the LAST position in the array
//pop  removes datatype at the LAST position in the array
*/
/*
3 Logical Operator

let dayOfMonth=13
let dayOfWeek= "Friday"

if(dayOfMonth===13 && dayOfWeek ==="Friday"){
    console.log("Spooky face !!!")
}
*/
let hands=["Rock","Paper","Scissor"]

function randomItem(){
let Random = Math.floor(Math.random() * 3) 
return hands[Random]
}
console.log(randomItem())



