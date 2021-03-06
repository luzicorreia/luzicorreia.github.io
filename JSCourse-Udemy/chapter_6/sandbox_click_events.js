const ul = document.querySelector('ul');
//ul.remove();  // DELETE A LISTA INTEIRA

const button = document.querySelector('button');

// ADICIONA ITEM NA LISTA
//button.addEventListener('click', () => {
//    ul.innerHTML += '<li>something new</li>';
//});

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    ul.append(li);   // Metodo APPEND insere na ultima linha
    //ul.prepend(li);// Metodo APPEND insere na primeira linha
});

//const items = document.querySelectorAll('li');

//items.forEach(item => {
  //  item.addEventListener('click', e => {
        //console.log('item clicked');
        //console.log(e);
        //console.log(e.target);
        //console.log(item);
        //e.target.style.textDecoration = 'line-through';
        //console.log('event in LI');
        //e.stopPropagation();  // PARAR O EVENTO NESTE PONTO
        //e.target.remove();
    //});
//});

ul.addEventListener('click', e => {   //TRATA TODOS FILHOS (LI) DA LISTA (UL)
    //console.log('event in UL');
    if(e.target.tagName === 'LI'){   // REMOVER APENAS O EVENTO CLICADO(LI)
        e.target.remove();
    }
});
