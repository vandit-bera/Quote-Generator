/* Target a button */
let btn = document.querySelector(".btn");

/* Target a quote div tag */
let quote = document.querySelector(".quote");

/* Create h4 tag and append into quote tag */
let quotes = document.createElement("h4");
quotes.classList.add("quotess");
quote.appendChild(quotes)

/* Create p tag and append into quote tag */
let authors = document.createElement("p");
authors.classList.add("author");
quote.appendChild(authors)

/* Target created new h4 tag */
let quotess = document.querySelector(".quotess");

/* Target Created new p tag */
let author = document.querySelector(".author");

/* Create eventlistener into the button */
btn.addEventListener("click", () =>{
    /* Fetch an API of quotable.io */
    fetch("https://api.quotable.io/random")
    .then((response) => {
        /* Convert api format into json format */
        return response.json();
    })
    .then((data) => {
        /* Take content into json api format and give into h4 tag */
        quotess.innerText = data.content;
        /* Take author into json api format and give into p tag */
        author.innerText = "Author is: " + data.author;
    })
    .catch((error) =>{
        /* If anyy Error genrate then print the Error */
        console.log("Error is: ", error)
    });
});