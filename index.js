const Button=document.getElementById("btn");
const Quote=document.getElementById("quote");

Button.addEventListener("click",async ()=>{
    try{
        const response=await fetch("https://dummyjson.com/quotes/random");
        const data=await response.json();
        Quote.innerText=data.quote;


    }

    catch(error){
        Quote.innerText = "Failed to load quote.";

        console.log(error);

        

    }
})