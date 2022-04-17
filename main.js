const inputButton = document.querySelector("#input-button-name");
inputButton.addEventListener("click", printName());

var inputName = document.getElementById("input-name");

function printName(){  
    localStorage.setItem('new-name', JSON.stringify(inputName.value));
    console.log(getQuote())
}


async function getQuote(){
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    console.log(data)
    if(response.ok){
        console.log(data.content)
        quote.innerHTML = data.content;
    }
    else {
        quote.textContent = "Consistency is key";
        console.log(data);
    }


}

function getImage(){
    document.body.style.backgroundImage = "url('https://picsum.photos/1600/900/?blur')";
    document.body.style.backgroundImage.filter = "blur(1rem)";
}
