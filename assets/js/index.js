const form = document.getElementById("form");
form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    const username = event.target.username.value;

    if (username.length > 3) {
            location.href = "level.html";
        }
    else alert ('Please enter a username with at least 4 characters')
}

const username = document.getElementById('username');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const usernameValue = username.value;

    localStorage.setItem('user-name', usernameValue);

    window.location.href = "level.html";
})

