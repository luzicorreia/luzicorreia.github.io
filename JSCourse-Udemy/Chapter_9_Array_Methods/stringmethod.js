// SORTING STRING - Alpha
//const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
//names.sort();      // ordena em ordem alfabética
//names.reverse();   // ordena em ordem decrescente, de trás pra frente, conforme estiver (não coloca em ordem alfabética)
//console.log(names);   

// SORTING NUMBERS
const scoresD = [10, 50, 20, 5, 35, 10, 70, 45];
scoresD.sort();     // Não ordena corretamente porque considera apenas o primeito byte
scoresD.reverse();

scoresD.sort((a,b) => a - b);    // ordena corretamente em ordem crescente
scoresD.sort((a,b) => b - a);    // ordena corretamente em ordem descrescente

console.log(scoresD);

// SORTING OBJECTS
const players = [
    {name:'mario', score: 20},
    {name:'luigi', score: 10},
    {name:'chun-li', score: 50},
    {name:'yoshi', score: 30},
    {name:'shaun', score: 70}
];
players.sort((a,b) => {                  // o SORT funciona com as variaves 0, 1 e -1, onde 0=igual, 1=maior e -1=menor
    if(a.score > b.score) { 
        return -1; 
    } else if (b.score > a.score){
        return 1;
    } else {
        return 0;
    }
});

players.sort((a,b) => b.score - a.score);   //forma simplificada do sort (acima como o SORT funciona)
console.log(players);
