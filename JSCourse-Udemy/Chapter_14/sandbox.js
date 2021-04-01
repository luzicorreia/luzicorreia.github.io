//STORE DATA IN LOCAL STORAGE 
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

//GET DATA FROM LOCAL STORAGE
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age)

//UPDATING DATA
//localStorage.setItem('name', 'luigi');
//localStorage.age = '40';

//name = localStorage.getItem('name');   // Não usou 'let', como na linha 6, porque a variavel já foi criada e agora só está chamando a mesma variável //
//age = localStorage.getItem('age');     // Não usou 'let', como na linha 7, porque a variavel já foi criada e agora só está chamando a mesma variável //

//DELETING DATA FROM LOCAL STORAGE
//localStorage.removeItem('name');
//localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name,age);