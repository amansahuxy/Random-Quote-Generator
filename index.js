const Button=document.getElementById("btn");
const Quote=document.getElementById("quote");

Button.addEventListener(click,async ()=>{
    try{
        const resposnse=await fetch("https://dummyjson.com/quotes/random");
        const data=await response.json();
        
    }
})