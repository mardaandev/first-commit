const url = "https://api.api-ninjas.com/v1/quotes?category=knowledge";
const btnEl = document.getElementById("generate-button");
const quoteEl = document.getElementById('quote');
const apiKey = "cgXTK0FVBcPCrR0KtRF7+g==WBXyd6aBmoYFP6ZG";
const authorNameEl = document.getElementById("author-name");

const options = {
    method:"GET",
    headers:{
        'X-Api-Key':apiKey,
    }
}

async function generateQuote(){

    try {
    
    btnEl.innerText= "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Generating a Quote for you..."
    authorNameEl.innerText = "f"

    const result = await fetch(url,options).then((res)=> res.json());
    quoteEl.textContent = result[0].quote;
    authorNameEl.textContent = result[0].author;
    
    btnEl.innerText= "Generate Quote";
    btnEl.disabled = false;
} catch (error) {
    quoteEl.textContent = "An Error Occured, try again!"
    authorNameEl.textContent = ""
    btnEl.innerText= "Generate Quote";
    btnEl.disabled = false;
    }
}

generateQuote();

btnEl.addEventListener("click",generateQuote);