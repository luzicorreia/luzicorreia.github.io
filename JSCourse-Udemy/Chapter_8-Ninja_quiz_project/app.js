const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //para nao reiniciar a pagina quando dar submit

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // CHECK ANSWERS
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // SHOW RESULT ON PAGE
  //Nossa tenttiva:
  //const total = document.querySelector('.result .text-primary')
  //result.style.display = 'block'
  //total.innerHTML = score ;  // Falta colocar o % na resposta
  //Solução professor:
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");

  //SET INTERVAL 
let output = 0;
const timer = setInterval(() => {
  result.querySelector("span").textContent = `${output}%`;
  if(output === score){
    clearInterval(timer);
  } else {
    output++;
  }
}, 10);
});

//WINDOW OBJECTS (global object)
//console.log('hello');
//window.console.log('hello');  // console.log window 

//alert("hello");
//window.alert("hello");  // alerta window após 3 seguundos

//setTimeout(() => {
//
//    alert('Hello Ninjas!');
//}, 3000);    // alerta window após 3 seguundos

// SET INTERVAL -> Exibe conteudo ('hello') a cada 1 segundo 
 //setInterval(() => {
//  console.log('hello');
//}, 1000);

// SET INTERVAL -> Exibe conteudo ('hello') a cada 1 segundo e para (STOP) no quinto intervalo 
//let i = 0;
//const timer = setInterval(() => {
//  console.log('hello');
//  i++;
//  if(i === 5){
//    clearInterval(timer);
//  }
//}, 1000);
