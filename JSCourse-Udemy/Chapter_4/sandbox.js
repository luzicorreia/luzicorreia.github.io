// FUNCTION EXPRESSION
//const speak = function(){
//    console.log('good day!');
//};
//speak();
//speak();
//speak();

// FUNCTION DECLARATION
//greet();
//greet();
//greet();

//function greet(){
//    console.log('hello there');
//}

// ARGUMENTS & ARGUMENTS

//const speak = function(name, time){
//    console.log(`Good ${time} ${name}`)
//};

//speak('mario', 'morning');

//const speak = function(name = 'luigi', time = 'night'){
//    console.log(`Good ${time} ${name}`)
//};

//speak();
//speak('mario', 'morning');
// ==> Nota: Função associada ao parametro e Método associado ao argumento

// RETURNING VALUES
//const calcArea = function(radius){
//    let area = 3.14 * radius**2;
//    return area;
// ou conforme abaixo, sem dclarar a variavel 'area':
//    return 3.14 * radius**2;
//}

//const area = calcArea(5);
//console.log(area);

//const calcVol = function(area, height){
//    return area * height;
//};

//const volume = calcVol(area, 2);
//console.log(volume); 
// ==> Função criada para calcular uma área exibida no BROWSER através da variavel 'area'

// REGULAR FUNCTION ==> Exemplos acima
//const calcArea = function(radius){
//    return 3.14 * radius**2;
//}


// ARROW FUNCTION - Novo: forma reduzida de escrever a função (sem escrever 'function' e sem '{}')
//const calcArea = radius => {
//    return 3.14 * radius **2;
//}

//const calcArea = radius => 3.14 * radius **2;

//const area = calcArea(5);
//    console.log('area is: ' , area);

//PRACTICE ARROW FUNCTIONS
//==> Função Regular:
//const greet = function(){
//    return 'hello, world';
//};

//==> Função Arrow:
//const greet = () => 'hello, world';

//const exit = greet()
//console.log(exit, "it's me");

//==> Função Regular:
//const bill = function(products, tax){
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//        total += products[i] + products[i] * tax;
//    }  
//    return total;
//}

//const total = bill([10,15,30], 0.2);
//console.log('total produtos e taxa: ', total);
// => Forma reduzida de exibição ABAIXO e completa ACIMA
//console.log(bill([10,15,30], 0.2));

//==> Função Arrow:
//const bill = (products, tax) =>{
//    let total = 0;
//    for(let i = 0; i < products.length; i++){
//        total += products[i] + products[i] * tax;
//    }  
//  return total;
//}

//const total = bill([10,15,30], 0.2);
//console.log('total produtos e taxa: ', total);

// FUNCTIONS VS METHODS
//const name = 'shaun';

//functions
//const greet = () => 'hello';

//let resultOne = greet();
//console.log(resultOne);

//methods
//let resultTwo = name.toUpperCase();
//console.log(resultTwo);

// => CALLBACKS & FOREACH
//CALLBACK
//function myFunc(callbackFunc) {
//    let value = 50;
//    callbackFunc(value);
//}

//const myFunc = (callbackFunc) => {
    // do something
//    let value = 50;
//    callbackFunc(value);
//};

//myFunc(function(value){
//    //do something
//    console.log(value);
//});

//myFunc(value =>{
    //do something
//    console.log(value);
//});

//FOREACH com CALLBACK
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);

//people.forEach(function(person){
//    console.log(person);
//})

//people.forEach((person, index) => {
//    console.log(index, person);
//})
// funções que você passa como argumentos para outras funções ou métodos -- Amanda