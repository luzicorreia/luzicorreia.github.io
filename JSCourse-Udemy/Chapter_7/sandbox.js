const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
//    console.log(username.value);
//    console.log(form.username.value);  //username comentado pq já está dentro do formulário


//REGULAR EXPRESSION - Valida caracteres de um campo
//const username = '@shaunp5421'
//const pattern = /[a-z]{6,}/;  // True: Considera APENAS se há caracteres na condição
//const pattern = /^[a-z]{6,}$/;  // False: Considera todos caracteres da string (^ e $)

//let result = pattern.test(username);
//console.log(result)

//if(result){
//    console.log('regular express passed :)');    
//}   else {
//    console.log('regular express failed :(');
//}

//let result = username.search(pattern);
//console.log(result);   //@shaunp5421 com ^ e $ = negativo (-1) e positivo (1) sem ^ e $

//VALIDATION
const username = form.username.value;

if(usernamePattern.test(username)){
    //feedback good info
    feedback.textContent = 'that username is valid!';
}else {
    //feedback help info
    feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long'; 
}

});

//LIVE FEEDBACK
form.username.addEventListener('keyup', e=> {
//    console.log(e.target.value, form.username.value);
if(usernamePattern.test(e.target.value)){
    console.log('passed');
}else {
    console.log('failed');
}
})