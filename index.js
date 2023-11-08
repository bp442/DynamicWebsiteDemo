"use strict";
const jokes = {
    "dadJokes": [
        {
            "id": 1,
            "setup": "I'm reading a book on anti-gravity.",
            "punchline": "It's impossible to put down!",
            "category": "Science"
        },
        {
            "id": 2,
            "setup": "Did you hear about the guy who invented Lifesavers?",
            "punchline": "He made a mint!",
            "category": "Business"
        },
        {
            "id": 3,
            "setup": "What do you call a fake noodle?",
            "punchline": "An Impasta.",
            "category": "Food"
        },
        {
            "id": 4,
            "setup": "Why don't skeletons fight each other?",
            "punchline": "They don't have the guts.",
            "category": "Spooky"
        },
        {
            "id": 5,
            "setup": "What do you call cheese that isn't yours?",
            "punchline": "Nacho cheese.",
            "category": "Food"
        },
        {
            "id": 6,
            "setup": "Why couldn't the bicycle stand up by itself?",
            "punchline": "It was two tired.",
            "category": "Transportation"
        },
        {
            "id": 7,
            "setup": "What did the grape do when he got stepped on?",
            "punchline": "He let out a little wine.",
            "category": "Food"
        },
        {
            "id": 8,
            "setup": "I would tell you a construction joke...",
            "punchline": "But I'm still working on it.",
            "category": "Work"
        },
        {
            "id": 9,
            "setup": "Why don't scientists trust atoms?",
            "punchline": "Because they make up everything!",
            "category": "Science"
        },
        {
            "id": 10,
            "setup": "I used to play piano by ear...",
            "punchline": "But now I use my hands.",
            "category": "Music"
        },
    ]
}
window.onload = init;

function init() {
    const showMeTheJokesBtn = document.getElementById("showMeTheJokesBtn");
    showMeTheJokesBtn.onclick = showMeTheJokesBtnClicked;

    populateCategoriesDropdown();
}

function populateCategoriesDropdown() {
    //populate categories dropdown with distinct categories from the jokes array
    let categories = getCategoriesArray();

    for(let category of categories){
        const categoriesSelect = document.getElementById("categoriesSelect");
        let newOption = new Option(category, category);
        categoriesSelect.appendChild(newOption);
    }

}

function getCategoriesArray(){
    let categories = [];
    for(let dadJoke of jokes.dadJokes){
        if(categories.includes(dadJoke.category) != true){
            categories.push(dadJoke.category);
        }
    }
    //sort categories
    categories.sort();
    return categories;
}
function showMeTheJokesBtnClicked() {
    //indentify the selected category and loop through to show jokes!
}