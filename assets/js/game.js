const userName = localStorage.getItem('user-name');
const country = document.getElementById('country');
const questionNumber = document.getElementById("question-number");
const scoreDisplay = document.getElementById('score');

document.getElementById('user-name').textContent = userName;

let currentQuestion = {};
let availableCountries = [];
let questionCounter = 0;
let scoreUpdate = 0;
let countriesEasy = [];
let countriesMedium = [];
let countriesHard = [];
let bonusAmount = [];

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

let gameDifficulty = localStorage.getItem('game-difficulty');
if (gameDifficulty == 'easy') {
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

}

function getNewQuestion() {
    // when reach 10/10 questions go to end page
    if (availableCountries.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('achievedScore', scoreUpdate);
    		location.href = "/pp2main/end.html";
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
    resetMap();
}

// dom reference to svg map
const map = document.getElementById("svg");
// trigger an event
map.addEventListener('click', selectCountry);
// declare a call back function when svg map is clicked
// have event hold the object
function selectCountry(event) {
    console.log('svg clicked');

    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset.number;
    console.log('selectedAnswer: ', selectedAnswer);
    console.log('currentQuestion.answer: ', currentQuestion.answer);

    // if else statement that applies class and checks if the country 
    // selected on the map is the same as the country the question asked
    if (selectedAnswer == currentQuestion.answer) {
        let classToApply = "correct";
        selectedChoice.classList.add(classToApply);
        increaseScore(clickCounter);
        correctCountrySelected();
        // need to wait for a second
        setTimeout(() => {
            getNewQuestion();
            clickCounter = 0;
            resetGreens();
            selectedChoice.classList.remove(classToApply);
            resetReds();
        }, 1000);
    } else if (selectedAnswer) {
        clickCounter++;
        let classToApply = "wrong";
        selectedChoice.classList.add(classToApply);
        incorrectCountrySelected();
        setTimeout(() => {
            resetReds();
            selectedChoice.classList.remove(classToApply);
        }, 1000);
    }

    maxGuesses();

    // function to style country when correctly clicked
    function correctCountrySelected() {
        let correctColor = document.getElementsByClassName('correct');
        for (let i = 0; i < correctColor.length; i++) {
            correctColor[i].style.fill = "green";
        }
        console.log('turning green');
    }
    // function to style country when incorrectly clicked
    function incorrectCountrySelected() {
        let incorrectColor = document.getElementsByClassName('wrong');
        for (let i = 0; i < incorrectColor.length; i++) {
            incorrectColor[i].style.fill = "red";
        }
        console.log('tirning red');
    }
// reset the colors back to default when new question comes
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
            setTimeout(() => {
                resetReds();
            }, 1000);

        }

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



// code taken from one step code which allowed for smooth zooming and panning of svg 
const svg = document.getElementById("svg");

const zoom = (direction) => {
  const { scale, x, y } = getTransformParameters(svg);
  let dScale = 0.1;
  if (direction == "out") dScale *= -1;
  if (scale == 0.1 && direction == "out") dScale = 0;
  svg.style.transform = getTransformString(scale + dScale, x, y);
};

const getTransformParameters = (element) => {
    const transform = element.style.transform;
    let scale = 1,
      x = 0,
      y = 0;
    if (transform.includes("scale"))
      scale = parseFloat(transform.slice(transform.indexOf("scale") + 6));
    if (transform.includes("translateX"))
      x = parseInt(transform.slice(transform.indexOf("translateX") + 11));
    if (transform.includes("translateY"))
      y = parseInt(transform.slice(transform.indexOf("translateY") + 11));
    return { scale, x, y };
  };
  
const getTransformString = (scale, x, y) =>
  "scale(" + scale + ") " + "translateX(" + x + "%) translateY(" + y + "%)";

const pan = (direction) => {
    const { scale, x, y } = getTransformParameters(svg);
    let dx = 0,
      dy = 0;
    switch (direction) {
      case "left":
        dx = -3;
        break;
      case "right":
        dx = 3;
        break;
      case "up":
        dy = -3;
        break;
      case "down":
        dy = 3;
        break;
    }
    svg.style.transform = getTransformString(scale, x + dx, y + dy);
  };

// i added this function to get map to reset when button clicked 
let defaultTransform = getTransformParameters(svg);
function resetMap() {
    svg.style.transform = getTransformString(defaultTransform.scale, defaultTransform.x, defaultTransform.y);
  };


document.getElementById("zoom-in-button").onclick = () => zoom("in");
document.getElementById("zoom-out-button").onclick = () => zoom("out");
document.getElementById("left-button").onclick = () => pan("left");
document.getElementById("right-button").onclick = () => pan("right");
document.getElementById("up-button").onclick = () => pan("up");
document.getElementById("down-button").onclick = () => pan("down");