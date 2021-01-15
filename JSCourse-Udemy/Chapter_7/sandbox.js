const form = document.querySelector('.signup-form');
//const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
//    console.log(username.value);
    console.log(form.username.value);  //username comentado pq já está dentro do formulário
});

//REGULAR EXPRESSION - Valida caracteres de um campo
const username = '@shaunp5421'
//const pattern = /[a-z]{6,}/;  // True: Considera APENAS se há caracteres na condição
const pattern = /^[a-z]{6,}$/;  // False: Considera todos caracteres da string (^ e $)

//let result = pattern.test(username);
//console.log(result)

//if(result){
//    console.log('regular express passed :)');    
//}   else {
//    console.log('regular express failed :(');
//}

let result = username.search(pattern);
console.log(result);   //@shaunp5421 com ^ e $ = negativo (-1) e positivo (1) sem ^ e $


