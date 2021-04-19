//DECLARATION JAVASCRIPT OBJECT
//UNIQUE OBJECT
//const userOne = {
//    username: 'ryu',
//    email: 'ryu@thenetninja.com.uk',
//    login(){
//        console.log('the user logged in');
//    },
//    logout(){
//        console.log('the user logged out');
//    }
//};

//console.log(userOne.email, userOne.username);
//userOne.login();

//const userTwo = {
//    username: 'chun li',
//    email: 'chun.li@thenetninja.com.uk',
//    login(){
//        console.log('the user logged in');
//    },
//    logout(){
//        console.log('the user logged out');
//    }
//};

//console.log(userTwo.email, userTwo.username);
//userTwo.login();

//MULTIPLY OBJECT = DON'T WORK THIS WAY BECAUSE IT NECESSARY TO CREATE A CONSTRUCTOR + THIS
//const userThree = new User('shaun@thenetninja.com.uk', 'shaun');

//CORRET FORM TO USE MULTIPLY OBJECT: "constructor" and "this"
class User {
  constructor(username, email) {
    //set up properties
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  loggout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

//ADICIONANDO PROPRIEDADES A SUBCLASSES - SUPER(palavra reservada para replicar ações do pai no filho)
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  //}
  //CRIANDO SUBCLASSES PARA DETERMINADA FUNÇÃO DENTRO DA CLASSE PRINCIPAL
  //class Admin extends User{
  deleteUser(user) {
    users = users.filter((u) => u.username != user.username);
  }
}

const userOne = new User("mario", "mario@thenetninja.co.uk");
const userTwo = new User("luigi", "luigi@thenetninja.co.uk");
const userThree = new Admin("shaun", "shaun@thenetninja.co.uk");

//let users = [userOne, userTwo, userThree];
//console.log(users);

//userThree.deleteUser(userTwo);
//console.log(users);

//userOne.login().incScore().incScore().loggout();
//userTwo.loggout();

//THE 'NEW' keyword
// 1-It creates a new object {}
// 2-It binds the value of 'this' to the new empty object
// 3-It calls the constructor function to 'build' the object
//METHODO CHAINNING
//1-Return this for chainning work (linha 61)
