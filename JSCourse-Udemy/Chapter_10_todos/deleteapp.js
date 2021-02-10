//DELETE TODOS
//list.addEventListener('click', e => {
//     if(e.target.classList.contains('delete')){    // conteudo target=<i class="far fa-trash-alt delete" aria-hidden="true">
//        e.target.parentElement.remove();
//     } 
//      console.log(e.target);
//    });

const search = document.querySelector(".search input");

const filterTodos = (term) => {
//  console.log(Array.from(list.children));

  Array.from(list.children) 
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => !todo.classList.add('filtered'));

    Array.from(list.children) 
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => !todo.classList.remove('filtered'));
    console.log(Array.from(todo));  
  };

//KEYUP EVENT 
search.addEventListener('keyup', () => {      // Evento
  const term = search.value.trim();           // Metodo
  filterTodos(term);                          // Função
});