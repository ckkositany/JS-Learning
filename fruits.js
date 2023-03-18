let fruits=["apple","orange","apple","apple","orange"]
let appleshelfEl=document.getElementById("apple-Shelf")
let orangeshelfEl=document.getElementById("orange-Shelf")
console.log("Fruits sorted")
function sortFruits(){

    for(let i=0; i<fruits.length; i++){
        if (fruits[i]==="apple"){
            appleshelfEl.textContent +="apple"
        }
        else {
            orangeshelfEl.textContent += "orange"
        }
    }
}
sortFruits()