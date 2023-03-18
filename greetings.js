let sentence=["Hello", "my ","name ", "is", "Cornelius"]
let greetingsEl=document.getElementById("greetings-el")
for(let i=0; i<sentence.length; i++){

    greetingsEl.textContent += sentence[i] +"  "

    console.log(sentence[i])
}