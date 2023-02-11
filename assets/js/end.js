const scoreMaxQuestions = document.getElementById('scoreMaxQuestions');
const achievedScore = localStorage.getItem('achievedScore'); 

// get user's score to appear on this page by using local storage again
scoreMaxQuestions.innerText = `${achievedScore}`;

// function that loads user input on home page from local storage 
// into designated field in different html files
const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;

// function to direct user to level select page once click play again
document.getElementById("playAgain").onclick = function playAgain () {
    location.href = "level.html";
};
