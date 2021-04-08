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
    constructor(username, email){
        //set up properties
        this.username = username;
        this.email = email;
    }
}

const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);

//THE 'NEW' keyword
// 1-It creates a new object {}
// 2-It binds the value of 'this' to the new empty object
// 3-It calls the constructor function to 'build' the object