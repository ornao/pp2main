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

// Original JavaScript code by Chirp Internet: chirpinternet.eu
document.getElementById("modal_feedback").addEventListener("submit", function(e) {
    var form = this;
    if(form.name.value == "") {
      alert("Please enter your Name");
      form.name.focus();
      e.preventDefault();
    } else if(form.email.value == "") {
      alert("Please enter a valid Email address");
      form.email.focus();
      e.preventDefault();
    } else if(form.message.value == "") {
      alert("Please enter your comment or question in the message box");
      form.message.focus();
      e.preventDefault();
    } 
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var modalWrapper = document.getElementById("modal_wrapper");
    var modalWindow  = document.getElementById("modal_window");
  
    var openModal = function(e)
    {
      modalWrapper.className = "overlay";
      modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
      modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
      e.preventDefault();
    };
  
    var closeModal = function(e)
    {
      modalWrapper.className = "";
      e.preventDefault();
    };
  
    var clickHandler = function(e) {
      if(e.target.tagName == "DIV") {
        if(e.target.id != "modal_window") closeModal(e);
      }
    };
  
    var keyHandler = function(e) {
      if(e.keyCode == 27) closeModal(e);
    };
  
    document.getElementById("modal_open").addEventListener("click", openModal, false);
    document.getElementById("modal_close").addEventListener("click", closeModal, false);
    document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keyHandler, false);
  }, false);

