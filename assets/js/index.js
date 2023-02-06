// once submit clicked validate user input
// if right save to local storage and go to next page
// if wrong give alert

const form = document.getElementById("form");
form.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();

    const username = event.target.username.value;
if (username.length > 3) {
    localStorage.setItem('user-name', username);
    location.href = "level.html";
}
else alert ('Please enter a username with at least 4 characters')
    
}