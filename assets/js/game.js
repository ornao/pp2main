const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;

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

    startGame = () => {
        questionCounter = 0;
        score = 0;
        availableCountries = [...countries];
    };
           
