// const scoreMaxQuestions = document.getElementById('scoreMaxQuestions');
// const MAX_QUESTIONS = 10;

// function that loads user input on home page from local storage 
// into designated field in different html files
const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;

// function to direct user to level select page once click play again
document.getElementById("playAgain").onclick = function playAgain () {
    location.href = "level.html";
};

// scoreMaxQuestions.innerText = `${scoreDisplay}/${MAX_QUESTIONS}`;