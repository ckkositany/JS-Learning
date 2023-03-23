// topic:building the chrome extensions
//lesson 1 making the save button work
/*function saveLead(){
    console.log("Button clicked")
}
*/
/*
//lessson 5 refactor to add event listener
let openBox= document.getElementById("box-opener")
openBox.addEventListener("click" ,function(){
    console.log("I want to open the box")
})
*/

const inputBtn=document.getElementById("input-btn")
//creating myLeads array and inputEl

let myLeads=[]
const inputEl=document.getElementById("input-el")
const ulEL=document.getElementById("ul-el")//grabbing the unorderd lists and storing it in a const var
//lesson 14 rendering myLeads in the unorderd lists

inputBtn.addEventListener("click",function(){
    // lesson 10 push to the myLead array inside this function
    myLeads.push(inputEl.value)
    console.log(myLeads)
    console.log("you have clicked the save button")
    inputEl.value=""// clearing out the input field
    // lessson 11 push the value from the input field
    renderLeads()
})
/*
// lesson 9 when to use let and const
const basePrice=520
const discount=120
let shippingCost=12
let shippingTime="5-12 days"

shippingCost=15
shippingTime="7-14 days"
// calculating the full-price
let fullPrice=basePrice - discount + shippingCost
console.log("Total cost:" +"" + fullPrice + "It will arrive in:" +"" + shippingTime)
*/

//lesson 20 improving the perfomance of our app
// lesson 21 creating the render function wrapping the for loop inside the render Leads function()
function renderLeads(){
let listItems=""

for (let i=0; i<myLeads.length; i++){
// lesson 20replacing  ulEl.innerHTML with the var listItems

//listItems += "<li><a target= '_blank' href='#'>" + myLeads[i] + "</a></li>" // we use target to make the link open in new tab
// using template stringsto break down the the content in the listitems var. We use back tick to allow line break
listItems += `<li>
            <a target= '_blank' href='${myLeads[i] }'>
                ${myLeads[i] }
                </a>
                </li>`// using template strings helps to break the lines with no erros azn above
console.log(listItems)


/*
//use create element() and append() insted of innerHTML:
const li =document.createElement("li")
li.textContent= myLeads[i]
ulEL.append(li)
*/
}
//renedring the listItems using ulEl.innerHtml 
ulEL.innerHTML=listItems
}


/*
// rendering the leads inside the unorderd lists
//lesson 16 using innerHTML element
const container=document.getElementById("container")
container.innerHTML= "<button onclick= 'buy()'>BUY !</button>"
function buy(){
    container.innerHTML += "<p>thank you for buying!!</p>"
    console.log("It has been bought")
   
}
*/
// use create element() and append() insted of innerHTML:
//you create an elemement(the create element) and store it in a variable
// you then set the var to the textContent
// you then append(th var created)
//lesson 23 adding the <a> tag attribute inside myLeads
/*
//lesson 25 learning to write templates strings
const recipient= "James"
const name="Kositany"
const email=`Hey 
${recipient}! 
How is it going? 
cheers ${name}`
console.log(email)
*/
//lesson 30 preparing the deployment
// Json = javascript object notation
//download the zip file to deploy the extension succesfully from the tutor's tutorials at 5:50 hours of the video
//learning the local storage to store our leads
// creating the local storage
//localStorage.setItem("myLeads","www.web3schools.co.ke")
 let leads=localStorage.getItem("myLeads")
localStorage.clear()
console.log(leads)

//storing arrays in the local storage
let myLead=`["www.1TO1MOBILE.co.ke"]`
myLead=JSON.parse(myLead)
myLead.push("www.samaneventures.ac.ke")

//JSON.stringify(myLead)
console.log(myLead)





