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

const password = 'p@ss';

//if(password.length >=12){
//    console.log('that password is mighty strong', password);
//} else if(password.length >= 8){
//    console.log('that pasword is long enough!', password);
//}else {
//    console.log('pasword is not long enough!', password);
//}

// LOGICAL OPERATORS: OR (||) and AND (&&)
//if(password.length >=12 && password.includes('@')){
//    console.log('that password is mighty strong', password);
//} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//    console.log('that pasword is strong enough!', password);
//}else {
//    console.log('pasword is not strong enough!', password);
//}

// LOGICAL NOT (!)

//let user = false;

//console.log(!true);
//console.log(!false);

//if(!user){
//    console.log('you must be logged in to continue');
//}

//BREAK and CONTINUE
//const scores = [50, 25, 0, 30, 100, 10];

//for(let i = 0; i < scores.length; i++){
//    if(scores[i] === 0){
//        continue;
//    }
//    console.log('your score:', scores[i]);
//    if(scores[i] === 100){
//        console.log('congratulations, you got the top score!');
//        break;
//    }
//}

// SWITCH STATEMENTS
const grade = 'C';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');
        break;
    case 'C':
        console.log('you got an C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    case 'F':
        console.log('you got an F!');
        break;    
    default:
        console.log('not a valid grade');                
}
