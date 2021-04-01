//STRINGFY & PARSE DATA
const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mauro'},
    {text: 'buy some bread', author: 'luigi'}
];

console.log(JSON.stringify(todos));
localStorage.setItem('todos', JSON.stringify(todos));     // stringfy = transforma objeto em string

const stored = localStorage.getItem('todos');

console.log(JSON.parse(stored));                         // parse = transforma string em objeto (se tiver varios objetos = array)
