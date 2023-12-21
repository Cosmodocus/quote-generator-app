const quoteApi = "https://api.quotable.io/random";
const author = document.getElementById('name');
const quote = document.getElementById('quote');

async function retrieveQuote(url){
    const retrieve = await fetch(url);
    let data = await retrieve.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}



function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + ' —by ' + author.innerHTML, 'Tweet Window', 'width=600, height=300')
}



retrieveQuote(quoteApi);