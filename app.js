"use strict";
let a = 5;
let b = a.toString();
let e = new String(a); // String
let e2 = new String(a).valueOf(); // string
let f = new Boolean(a).valueOf(); // boolean
let c = 'sdfs';
let d = parseInt(c);
const user = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasya',
};
const user2 = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasya',
};
// valid но не рекомендуется
const user3 = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasya',
};
const admin = Object.assign(Object.assign({}, user), { role: 1 }); // не рекомендуется
function userToAdmin(user) {
    return {
        name: user.name,
        role: 1,
    };
}
const admin2 = userToAdmin(user);
