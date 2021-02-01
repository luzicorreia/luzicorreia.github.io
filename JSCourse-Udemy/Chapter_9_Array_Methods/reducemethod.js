// REDUCE METHOD - Retorna score maior de 50, ou seja, 3 scores
const scoresA = [10,20,60,40,70,90,30];

//const result = scoresA.reduce((acc,curr) => {
//    if(curr > 50){
//        acc++;
//    }
//    return acc;
//},0);
//console.log(result);

// REDUCE METHOD - Retorna total score do jogador Mario
const scoresB = [
    {player: 'mario', scoresB : 50},
    {player: 'yoshi', scoresB : 30},
    {player: 'mario', scoresB : 70},
    {player: 'cristal', scoresB : 60},
    {player: 'mario', scoresB : 30},
    {player: 'yoshi', scoresB : 30},
    {player: 'mario', scoresB : 50},
    {player: 'cristal', scoresB : 60},
    {player: 'mario', scoresB : 40},
    {player: 'yoshi', scoresB : 30},
    {player: 'mario', scoresB : 60},
    {player: 'cristal', scoresB : 60}    
];

const marioTotal = scoresB.reduce((acc,curr) => {
    if(curr.player === 'mario'){
        acc += curr.scoresB;
    }
    return acc;
}, 0);
console.log(marioTotal);
