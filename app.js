"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
}
const users = new Users();
users.push(new User('Вася'));
console.log(users.toString());
