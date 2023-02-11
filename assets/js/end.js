const scoreMaxQuestions = document.getElementById('scoreMaxQuestions');
const MAX_QUESTIONS = 10;
const achievedScore = localStorage.getItem('achievedScore'); 
scoreMaxQuestions.innerText = `${achievedScore}`;
// scoreMaxQuestions.innerText = `${achievedScore}/${MAX_QUESTIONS}`;

// function that loads user input on home page from local storage 
// into designated field in different html files
const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;

// function that pulls username, level and score to table 


// gameDifficulty = localStorage.getItem('game-difficulty');
// if(gameDifficulty == 'easy') {
//   document.getElementById('levelTable').textContent;
// } else if (gameDifficulty == 'medium') {
//   document.getElementById('user-name').textContent = userName;
// } else {
//     loadHardCountries();
// }

// function to direct user to level select page once click play again
document.getElementById("playAgain").onclick = function playAgain () {
    location.href = "level.html";
};
