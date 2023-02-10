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
let countriesEasy = [];
let countriesMedium = [];
let countriesHard = [];

const MAX_ATTEMPTS = 3;

let clickCounter = 0;


// want to connect buttons from level.html page to fetch different json files depending on choice
// level easy
function loadEasyCountries() {

    fetch("countriesEasy.json")
        .then(res => {
            return res.json();
        })
        .then(loadedCountries => {
            console.log(loadedCountries);
            countriesEasy = loadedCountries;
            startGame('easy');
        })
        .catch(err => {
            console.error(err);
        });
}

// medium level
function loadMediumCountries() {
    fetch("countriesMedium.json")
    .then(res => {
        return res.json();
    })
    .then(loadedCountries => {
        console.log(loadedCountries);
        countriesMedium = loadedCountries;
        startGame('medium');
    })
    .catch(err => {
        console.error(err);
    });
}

// hard level
function loadHardCountries() {
    fetch("countriesHard.json")
    .then(res => {
        return res.json();
    })
    .then(loadedCountries => {
        console.log(loadedCountries);
        countriesHard = loadedCountries;
        startGame('hard');
    })
    .catch(err => {
        console.error(err);
    });
}

gameDifficulty = localStorage.getItem('game-difficulty');
if(gameDifficulty == 'easy') {
    loadEasyCountries();
} else if (gameDifficulty == 'medium') {
    loadMediumCountries();
} else {
    loadHardCountries();
}

// max number of questions for the game
const MAX_QUESTIONS = 10;

function startGame(difficulty) {
    questionCounter = 0;
    scoreUpdate = 0;
    // list country names in an array
    if (difficulty == 'easy') {
        availableCountries = [...countriesEasy];
    } else if (difficulty == 'medium') {
        availableCountries = [...countriesMedium];
    } else {
        availableCountries = [...countriesHard];
    }

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
    console.log('svg clicked')

    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    console.log('selectedAnswer: ', selectedAnswer);
    console.log('currentQuestion.answer: ', currentQuestion.answer);
    
    // if else statement that applies class and checks if the country 
    // selected on the map is the same as the country the question asked
    if (selectedAnswer == currentQuestion.answer) {
        classToApply = "correct";
        selectedChoice.classList.add(classToApply);
        increaseScore(clickCounter);
        correctCountrySelected();
        // need to wait for a second
        setTimeout(() => {
            getNewQuestion();
            clickCounter = 0;
            resetGreens()
            selectedChoice.classList.remove(classToApply);
            resetReds();    
        }, 1000);
    } else if (selectedAnswer) {
        clickCounter++;
        classToApply = "wrong";
        selectedChoice.classList.add(classToApply);
        incorrectCountrySelected();
    }

    maxGuesses();

    // when reach max guesses move to new question and remove all guesses from map
    // if (clickCounter >= MAX_ATTEMPTS) {
    //     getNewQuestion();
    //     selectedChoice.classList.remove(classToApply)

    // }

    // function to style country when correctly clicked
    function correctCountrySelected() {
        let correctColor = document.getElementsByClassName('correct');
        for (let i = 0; i < correctColor.length; i++) {
            correctColor[i].style.fill = "green";
        }
        console.log('turning green')
        // document.getElementById('svg').addEventListener("click", function () {
        // })
    };
    // function to style country when incorrectly clicked
    function incorrectCountrySelected() {
        let incorrectColor = document.getElementsByClassName('wrong');
        for (let i = 0; i < incorrectColor.length; i++) {
            incorrectColor[i].style.fill = "red";
        }
        // document.getElementById('svg').addEventListener("click", function () {
        // })
    };

    const firstAttemptBonus = 3;
    const secondAttemptBonus = 2;
    const thirdAttemptBonus = 1;

    function resetReds() {
        let incorrectColor = document.getElementsByClassName('wrong');
        for (let i = 0; i < incorrectColor.length; i++) {
            incorrectColor[i].style.fill = "#BEE0EF";
        }
    }
    
    function resetGreens() {
        let incorrectColor = document.getElementsByClassName('correct');
        for (let i = 0; i < incorrectColor.length; i++) {
            incorrectColor[i].style.fill = "#BEE0EF";
        }
    }
    // function that only allowed 3 incorrect guesses before moving on to next question
    function maxGuesses() {
        if (clickCounter >= MAX_ATTEMPTS) {
            clickCounter = 0;
            getNewQuestion();

            resetReds();
        }

        // document.addEventListener('click', function (event) {
        //     if (event.target.classList.contains('wrong')) {
        //         // when reach 3/3 attempts move onto next question without points

        //     }
        // })
    }

    

    // function to increase score by bonus amount
    function increaseScore(clickCounts) {
        // function that give 3 points if correct country selected on first go
        if (clickCounts == 0) {
            bonusAmount = 3;
            // function that give 2 points if correct country selected on 2nd go
        } else if (clickCounts == 1) {
            bonusAmount = 2;
            // function that give 1 points if correct country selected on 3rd go
        } else if (clickCounts == 2) {
            bonusAmount = 1;
        }
        scoreUpdate += bonusAmount;
        scoreDisplay.innerText = scoreUpdate;
    }
}