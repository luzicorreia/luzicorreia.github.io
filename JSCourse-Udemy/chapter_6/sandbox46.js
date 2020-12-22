// Query Element
//const para = document.querySelector('p');  // singular select
//const para = document.querySelector('body > h1');
// console.log(para)

//const paras = document.querySelectorAll('p');  //plural select
//paras.forEach(para => {
//    console.log(para);
//});

//console.log(paras[2]);


// *** Get element
const title = document.getElementById('page-title'); // get an element by ID
console.log(title);

// const errors = document.getElementsByClassName('error'); // elements by their class name
// console.log(errors);
// console.log(errors[0]);
// errors.forEach(error => {
//    console.log(error) 
// });

// get elements by their tag name
const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);