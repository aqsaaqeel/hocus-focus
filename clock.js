setInterval(
    function (){
        const date = new Date();
        document.getElementById("clock").innerHTML = date.getHours() + " : " + date.getMinutes() 
    }, 1000);