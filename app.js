"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Сохраняет в базу
    }
    // pay(date?: Date) {
    //     super.pay()
    //     if (date) {
    //         this.paidAt = date
    //     }
    // }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new PersistedPayment();
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name + ' from admin constuctor');
    }
}
const person = new Admin();
console.log(person.name);
new Error('');
class HttpError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code !== null && code !== void 0 ? code : 500;
    }
}
