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
