"use strict";
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Вася',
        };
    }
}
const user = getUser();
if (user) {
    const uname = user.name; //strictNullChecks
}
