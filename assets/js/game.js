const userName = localStorage.getItem('user-name');
const country = document.getElementById('country')
const atlas = document.getElementById('mapdiv');
const questionNumber = document.getElementById("questionNumber")

document.getElementById('user-name').textContent = userName;

let currentQuestion = {};
let availableCountries = [];
let questionCounter = 0;
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

    const MAX_QUESTIONS = 10;

    function startGame() {
        questionCounter = 0;
        availableCountries = [...countries];

        getNewQuestion();
    };

    function getNewQuestion() {
        questionCounter++;
        questionNumber.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
        const questionIndex = Math.floor(Math.random() * availableCountries.length);
        currentQuestion = availableCountries[questionIndex];
        country.innerText = currentQuestion.country;

        };


          atlas.addEventListener("click", mapSelect);
            
          function mapSelect() {
            document.getElementById("mapdiv");
            console.log("you clicked the map!")
        }
        
    // availableCountries.splice(questionIndex, 1);
    
      

