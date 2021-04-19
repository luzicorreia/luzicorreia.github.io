//CONSTRUCTIONS FUNCTINS
function User2(username, email){
    this.username = username;
    this.email = email;
    this.login = function(){
        console.log(`${this.username} has logged in`);
    };    
}
const userFour = new User2('mario', 'mario@thenetninja.co.uk');
const userFive = new User2('luigi', 'luigi@thenetninja.co.uk');

console.log(userFour, userFive);
userFour.login();