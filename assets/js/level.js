// get user input from index.html and display it as user-name 
const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;

// when easy button clicked, load what 'easy" to local storage so have access to in next page
document.getElementById("easy").onclick = function levelEasy () {
    location.href = "game.html";
    localStorage.setItem('game-difficulty', 'easy');
};
// when medium button clicked, load what 'medium" to local storage so have access to in next page
document.getElementById("medium").onclick = function levelMedium () {
    location.href = "game.html";
    localStorage.setItem('game-difficulty', 'medium');
};
// when hard button clicked, load what 'hard" to local storage so have access to in next page
document.getElementById("hard").onclick = function levelHard () {
    location.href = "game.html";
    localStorage.setItem('game-difficulty', 'hard');
};



   

