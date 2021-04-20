//CONSTRUCTIONS FUNCTINS
function User2(username, email){
    this.username = username;
    this.email = email;
}

User2.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
};

User2.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
};


const userFour = new User2('mario', 'mario@thenetninja.co.uk');
const userFive = new User2('luigi', 'luigi@thenetninja.co.uk');

console.log(userFour, userFive);
userFour.login().logout();
