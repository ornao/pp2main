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

// get country name from json file
fetch("easy.json")
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

// max number of questions for the game
const MAX_QUESTIONS = 10;

function startGame() {
    questionCounter = 0;
    // list country names in an array
        availableCountries = [...easy];

        getNewQuestion();
};

function getNewQuestion() {
    // when reach 10/10 questions go to end page
    if (availableCountries.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign('/end.html');
    }
    // increase question by 1
    questionCounter++;
    // display number of question over mav number of question
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

// function that checks if the country selected on the map is the same as the country the question asked

    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset['number'];

    // if else statement that applies class
    if (selectedAnswer == currentQuestion.answer) {
        classToApply = "correct";
        increaseScore();
        selectedChoice.classList.add(classToApply); 
        correctCountrySelected(); 
        getNewQuestion();
    }
    else 
        classToApply = "incorrect";
        selectedChoice.classList.add(classToApply); 
        incorrectCountrySelected();
    
}    

        // function to style country when correctly clicked
        function correctCountrySelected() {
        let correctColor= document.getElementsByClassName('correct');
        document.getElementById('svg').addEventListener("click", function(){ 
          for (let i = 0; i < correctColor.length; i++) {
           correctColor[i].style.fill = "green";
          }
        })
    };
          // style for country when incorrectly clicked
          function incorrectCountrySelected() {
        let incorrectColor= document.getElementsByClassName('incorrect');
        document.getElementById('svg').addEventListener("click", function(){ 
          for (let i = 0; i < incorrectColor.length; i++) {
           incorrectColor[i].style.fill = "red";
          }
    })

          };
        
function increaseScore() {
        scoreUpdate+=1;
        scoreDisplay.innerText = scoreUpdate;
};
   





        
   
    
      

