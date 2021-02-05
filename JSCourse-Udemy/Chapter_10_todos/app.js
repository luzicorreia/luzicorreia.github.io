const addForm = document.querySelector(".add");
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;
  
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();  // trim method retira espaços à direita e à esquerda da string
  
  if(todo.length){
    generateTemplate(todo);   // só executa se tiver conteudo, ou seja, numero ou string (length valida conteudo digitado)
    addForm.reset();          //limpa o campo digitado apos a execução
  }
//  console.log(todo);
});

