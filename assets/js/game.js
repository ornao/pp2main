const userName = localStorage.getItem('user-name');
const country = document.getElementById('country')

document.getElementById('user-name').textContent = userName;

let currentQuestion = {};
let availableQuesions = [];

let countries = [];

fetch("countries.json")
    .then(res => {
        return res.json();
    })
    .then(loadedCountries => {
        console.log(loadedCountries);
        countries = loadedCountries;
        startGame();
    })
    .catch(err => {
        console.error(err);
    });

    function startGame() {
        availableCountries = [...countries];
        getNewQuestion();
    };

    function getNewQuestion() {
        const questionIndex = Math.floor(Math.random() * availableCountries.length);
        currentQuestion = availableCountries[questionIndex];
        country.innerText = currentQuestion.country;
    };
