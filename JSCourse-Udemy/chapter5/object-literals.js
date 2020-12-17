// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & chese rules', '10 things to make with marmite'], 
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        
    }
};
//Invocando um metodo => login, nova propriedade do objeto USER
user.login();
user.logout();

//console.log(user);
//console.log(user.name);
// outra opção - console.log(user['age']);

// user.age = 35;
//console.log(user.age);

//console.log(user['location']);
//user['name'] = 'chun-li';
//console.log(user['name']);

//console.log(typeof user);

//METODO
const name = 'mario';
name.toUpperCase();
