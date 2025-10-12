"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Вася');
const res2 = new AdminBuilder().setName('Петя');
console.log('res ==> ', res);
console.log('res2 ==> ', res2);
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}
