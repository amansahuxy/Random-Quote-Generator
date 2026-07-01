const Button=document.getElementById("btn");
const English=document.getElementById("english");
const Hindi=document.getElementById("hindi");
const copy = document.getElementById("copy");
const like = document.getElementById("like");
const share = document.getElementById("share");

let englishQuote = "";
let hindiQuote = "";
let liked = false;

Button.addEventListener("click",async ()=>{

English.innerText="Loading...";
Hindi.innerText="Loading...";

    try{
        const response=await fetch("https://dummyjson.com/quotes/random");
        const data=await response.json();
        const engQuote=data.quote;
        englishQuote = engQuote;
        English.innerText=engQuote;
        English.style.color="brown";


        const hindiResponse=await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(engQuote)}&langpair=en|hi`);
        
        const hindiData=await hindiResponse.json();
        Hindi.innerText=hindiData.responseData.translatedText;

        hindiQuote = hindiData.responseData.translatedText;
        Hindi.style.color="green";
    }

    catch(error){
        English.innerText = "Failed to load quote.";
        Hindi.innerText="";

        console.log(error);

    }

});


copy.addEventListener("click", () => {

    if (englishQuote === "") {

        alert("Please generate a quote first!");
        return;

    }

    const text = englishQuote + "\n\n" + hindiQuote;

    navigator.clipboard.writeText(text);

    alert("Quote Copied!");

});


like.addEventListener("click", () => {

    liked = !liked;

    if (liked) {

        like.innerText = "❤️ Liked";

    }

    else {

        like.innerText = "🤍 Like";

    }

});



share.addEventListener("click", () => {
       if (englishQuote === "") {

        alert("Please generate a quote first!");
        return;

    }


    window.open("https://web.whatsapp.com");

});


