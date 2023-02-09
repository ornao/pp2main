const userName = localStorage.getItem('user-name');
const country = document.getElementById('country')
const atlas = document.getElementById('mapdiv');
const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById('score');

document.getElementById('user-name').textContent = userName;

let currentQuestion = {};
let availableCountries = [];
let questionCounter = 0;
let scoreUpdate = 0;
let easy = [];

// want to connect buttons from level.html page to fetch different json files depending on choice
// level easy

function loadEasyCountries() {
    let easy = document.getElementById("easy");
    easy.addEventListener("click", function () {
        // get country name from json file
        fetch("countriesEasy.json")
        .then(res => {
            return res.json();
        })
        .then(loadedCountries => {
            console.log(loadedCountries);
            easy = loadedCountries;
            startGame();
        })
        .catch(err => {
            console.error(err);
        });
    
    })
}
// medium level
function loadMediumCountries() {
    let medium = document.getElementById("medium");
    medium.addEventListener("click", function () {
        // get country name from json file
        fetch("countriesMedium.json")
        .then(res => {
            return res.json();
        })
        .then(loadedCountries => {
            console.log(loadedCountries);
            easy = loadedCountries;
            startGame();
        })
        .catch(err => {
            console.error(err);
        });
    
    })
}

// hard level
function loadHardCountries() {
    let hard = document.getElementById("hard");
    hard.addEventListener("click", function () {
        // get country name from json file
        fetch("countriesEasy.json")
        .then(res => {
            return res.json();
        })
        .then(loadedCountries => {
            console.log(loadedCountries);
            easy = loadedCountries;
            startGame();
        })
        .catch(err => {
            console.error(err);
        });
    
    })
}

loadEasyCountries();
loadMediumCountries();
loadHardCountries();

// max number of questions for the game
const MAX_QUESTIONS = 10;

function startGame() {
    questionCounter = 0;
    scoreUpdate = 0;
    // list country names in an array
    availableCountries = [...easy];

    getNewQuestion();
};

function getNewQuestion() {
    // when reach 10/10 questions go to end page
    if (availableCountries.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('achievedScore', scoreUpdate);
        return window.location.assign('/end.html');
    }
    // increase question by 1
    questionCounter++;
    // display number of question over max number of question
    questionNumber.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    // display random country from list array which orginally got from .json file
    const questionIndex = Math.floor(Math.random() * availableCountries.length);
    currentQuestion = availableCountries[questionIndex];
    // display it in span of game.html
    country.innerText = currentQuestion.country;
    // takes away a country name from list once used so countries do not repeat
    availableCountries.splice(questionIndex, 1);
};

// dom reference to svg map
const map = document.getElementById("svg");
// trigger an event
svg.addEventListener('click', selectCountry);
// declare a call back function when svg map is clicked
// have event hold the object
function selectCountry(event) {

    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    const MAX_ATTEMPTS = 3;

    let clickCounter = 0;

    // if else statement that applies class and checks if the country 
    // selected on the map is the same as the country the question asked
    if (selectedAnswer == currentQuestion.answer) {
        classToApply = "correct";
        selectedChoice.classList.add(classToApply);
        increaseScore();
        correctCountrySelected();
        getNewQuestion();
    } else
        classToApply = "wrong";
    selectedChoice.classList.add(classToApply);
    incorrectCountrySelected();

    maxGuesses();

    if (clickCounter >= MAX_ATTEMPTS) {
        selectedChoice.classList.remove(classToApply)

    }

    // function to style country when correctly clicked
    function correctCountrySelected() {
        let correctColor = document.getElementsByClassName('correct');
        document.getElementById('svg').addEventListener("click", function () {
            for (let i = 0; i < correctColor.length; i++) {
                correctColor[i].style.fill = "green";
            }
        })
    };
    // function to style country when incorrectly clicked
    function incorrectCountrySelected() {
        let incorrectColor = document.getElementsByClassName('wrong');
        document.getElementById('svg').addEventListener("click", function () {
            for (let i = 0; i < incorrectColor.length; i++) {
                incorrectColor[i].style.fill = "red";
            }
        })

    };

    // const firstAttemptBonus = 3;
    // const secondAttemptBonus = 2;
    // const thirdAttemptBonus = 1;

    

    // function that only allowed 3 incorrect guesses before moving on to next question
    function maxGuesses() {
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('wrong')) {
                clickCounter++;
                // when reach 3/3 attempts move onto next question without points
                if (clickCounter >= MAX_ATTEMPTS) {
                    getNewQuestion();
                }

            }
        })
    }

    // // function that give 3 points if correct country selected on first go
    // if (clickCounter = 0) {
    //     increaseScore(firstAttemptBonus);
    //     // function that give 2 points if correct country selected on 2nd go
    // } else if (clickCounter = 1) {
    //     increaseScore(secondAttemptBonus);
    //     // function that give 1 points if correct country selected on 3rd go
    // } else if (clickCounter = 2) {
    //     increaseScore(thirdAttemptBonus);
    // }

    // function to increase score by 1
    function increaseScore() {
        scoreUpdate += 1;
        scoreDisplay.innerText = scoreUpdate;
    }
}