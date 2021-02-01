const scores = [10, 30, 15, 25, 50, 40, 5];

//const filteredScores = scores.filter((score) => {
//    return score > 20;
//});
//console.log(scores);

//const users = [
//    {name: 'shaun', premium: true},
//    {name: 'yoshi', premium: false},
//    {name: 'mario', premium: false},
//    {name: 'chun-li', premium: true}
//];

//const premiumUsers = users.filter(user => {
//    return user.premium;
//});
//console.log(premiumUsers);

// FIND METHOD - Retorna o primeiro argumento na condição
const scoresC = [10, 5, 0, 40, 30, 10, 90, 70];

const firstHighScore = scoresC.find((scoresC) => {
    return scoresC > 50;
});

console.log(firstHighScore);

