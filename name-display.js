document.getElementById("print-name").innerHTML = "Good Day, " + localStorage.getItem('new-name');
const inputButtonFocus = document.querySelector("#input-button-focus");
inputButtonFocus.addEventListener("click", printFocus);

let inputFocus = document.getElementById("input-focus");
function printFocus(){
    localStorage.setItem('main-focus', JSON.stringify(inputFocus.value))
}
let quote = document.getElementById("quote-area");
async function getQuote(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data)
    if(response.ok){
        console.log(data.content)
        quote.innerHTML = data.content;
    }
    else {
    
        quote.textContent = "Consistency is key"
                      
    }
}
window.onload = getQuote()
window.onload = getImage
function getImage(){
    document.body.style.backgroundImage = "url('https://picsum.photos/1600/900/?blur')";
    document.body.style.backgroundImage.filter = "blur(1rem)";
}
