const userName = localStorage.getItem('user-name');
document.getElementById('user-name').textContent = userName;

// let countries = [];

// fetch(
//     'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple'
// )
//     .then(res => {
//         return res.json();
//     })
//     .then(loadedCountries => {
//         console.log(loadedCountries);
//         countries = loadedCountries;
//         startGame();
//     })
//     .catch(err => {
//         console.error(err);
//     });
           
