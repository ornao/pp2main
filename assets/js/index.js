// function to remind user to enter username if they click out of field
  function blurFunction() {
    let input = document.getElementById("username");
    input.style.background = "#FFCCCB";
    input.style.width = "12rem";
    input.placeholder = "    Don't forget your username!";
  }
// fucntion that removes color and text once clicked again
  function focusFunction() {
    let input = document.getElementById("username");
    document.getElementById("username").style.background = "#f5fbff";
    input.placeholder = "";
  }

// once submit clicked validate user input
// if right save to local storage and go to next page
// if wrong give alert
const form = document.getElementById("form"); form.addEventListener('submit', validateForm);

  function validateForm(event) {
    event.preventDefault();

    const username = event.target.username.value;
      if (username.length > 3) {
        localStorage.setItem('user-name', username);
        location.href = "level.html";
      } else alert('Please enter a username with at least 4 characters'); 
  }