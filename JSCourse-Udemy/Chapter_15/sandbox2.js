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

function Admin2(username, email, title){
    User2.call(this, username, email);
    this.title = title;
}

Admin2.prototype = Object.create(User2.prototype);

Admin2.prototype.deleteUser2 = function(){
    //DELETE USER2
};

const userFour = new User2('mario', 'mario@thenetninja.co.uk');
const userFive = new User2('luigi', 'luigi@thenetninja.co.uk');
const userSix = new Admin2('shaun', 'shaun@thenetninja.co.uk', 'black-belt-ninja');

console.log(userFour, userFive, userSix);
userFour.login().logout();
