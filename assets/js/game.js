const userName = localStorage.getItem('user-name');
const country = document.getElementById('country')
const atlas = document.getElementById('mapdiv');
const questionNumber = document.getElementById("questionNumber");

document.getElementById('user-name').textContent = userName;

let currentQuestion = {};
let availableCountries = [];
let questionCounter = 0;
let easy = [];


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

    const MAX_QUESTIONS = 10;

    function startGame() {
        questionCounter = 0;
        availableCountries = [...easy];

        getNewQuestion();
    };

    function getNewQuestion() {
        if (availableCountries.length === 0 || questionCounter >= MAX_QUESTIONS) {
            //go to the end page
            return window.location.assign('/end.html');
        }
            questionCounter++;
        questionNumber.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
        const questionIndex = Math.floor(Math.random() * availableCountries.length);
        currentQuestion = availableCountries[questionIndex];
        country.innerText = currentQuestion.country;

        availableCountries.splice(questionIndex, 1);

        };

          atlas.addEventListener("click", mapSelect);
            
          function mapSelect() {
            document.getElementById("mapdiv");

           getNewQuestion();
        }

        
   
    
      

