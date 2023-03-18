// initialize the count as 0
//listen for clicks on the increment button
//implement the count variable when the count is clicked
//change the count-el in the html to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el") //passing arguments

function increment(){


    count += 1;
    countEl.textContent = count //know the differnce between .innertxt and .textcontent
    console.log(count)
} 

//lesson 16 to display the count with innertext


//lesson 17 to create a save button
let saveEl=document.getElementById("save-el")

function save(){
    
    let Countstrng=count + " - "
    saveEl.textContent += Countstrng
    //lesson 22 setting the count to 0
    countEl.textContent=0
    count=0
    console.log(count)

} 

