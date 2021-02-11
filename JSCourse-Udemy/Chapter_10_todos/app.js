const search = document.querySelector(".search input");
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

//DELETE TODOS
list.addEventListener('click', e => {
     if(e.target.classList.contains('delete')){    // conteudo target=<i class="far fa-trash-alt delete" aria-hidden="true">
        e.target.parentElement.remove();
     } 
      console.log(e.target);
    });


const filterTodos = (term) => {
//  console.log(Array.from(list.children));

  Array.from(list.children) 
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children) 
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));
  };

//KEYUP EVENT 
search.addEventListener('keyup', () => {            // Evento
  const term = search.value.trim().toLowerCase();   // Metodo: excluir espaços da direita e esquerda e transformar conteudo em letra minuscula
  filterTodos(term);                                // Função
});

