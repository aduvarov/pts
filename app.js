"use strict";
class Payment {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment();
console.log(p.getDate());
const user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
};
console.log(user.paymentDate());
class PaymentPersistent extends Payment {
    save() {
        return this.getDateArrow();
    }
}
console.log(new PaymentPersistent().save());
