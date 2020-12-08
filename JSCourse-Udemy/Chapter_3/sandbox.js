// FOR LOOPS

// for(let i = 0; i < 5; i++){
//     console.log('in loop', i);
// }

// console.log('loop finished');

//const names = ['shaun', 'mario', 'luigi'];
//for(let i = 0; i < names.length; i++){
//    console.log(i);
//    console.log (names[i]);
//    let html = `<div>${names[i]}</div>`;
//    console.log(html);
//}


// WHILE LOOPS

//let i = 0;

//while(i < 5){
//    console.log('in looop: ', i);
//    i++;
//}

//const names = ['shaun', 'mario', 'luigi'];
//let i = 0;

//while(i < names.length){
//    console.log('Name: ', names[i]);
//    i++;
//}

// DO WHILE LOOPS
//let i = 3;

//do{
//    console.log('value of i is:', i);
//    i++;
//}while (i < 5);


//IF CONDITIONS STATEMENTS
//const age = 25;

//if(age > 20){
//    console.log('you are over 20 yeras old', age);
//}

//const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
//if(ninjas.length > 3){
//    console.log("that´s a lot of ninjas", ninjas);
//}

const password = 'p@ssword1234';

if(password.length >=12){
    console.log('that password is mighty strong', password);
} else if(password.length >= 8){
    console.log('that pasword is long enough!', password);
}else {
    console.log('pasword is not long enough!', password);
}
