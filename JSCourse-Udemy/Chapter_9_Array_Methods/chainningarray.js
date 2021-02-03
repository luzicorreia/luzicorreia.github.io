const productsA = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'bana skin', price: 5},
    {name: 'mushroom', price: 50}
];

//const filtered = productsA.filter(product => product.price > 20);

//const promos = filtered.map(product => {
//    return `the ${product.name} is ${product.price / 2} pounds`;   // TemplateString com CRASE e não ASPAS
//});


//CHAINNING ARRAY = Juntar filter com map (Pode juntar outros metodos e também é válido para outros tipos de dados (string/objetos QUE RETORNAM DADOS)
const promos = productsA
.filter(product => product.price > 20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`); 

console.log(promos);

