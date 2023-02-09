const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;


document.getElementById("easy").onclick = function levelEasy () {
    location.href = "game.html";
    localStorage.setItem('game-difficulty', 'easy');
};

document.getElementById("medium").onclick = function levelMedium () {
    location.href = "game.html";
    localStorage.setItem('game-difficulty', 'medium');
};

document.getElementById("hard").onclick = function levelHard () {
    location.href = "game.html";
    localStorage.setItem('game-difficulty', 'hard');
};



   

