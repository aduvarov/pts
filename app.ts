type PaymentStatus = 'new' | 'paid'
class Payment {
    id: number
    status: PaymentStatus = 'new'

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'paid'
    }
}

class PersistedPayment extends Payment {
    databaseId: number
    paidAt: Date

    constructor() {
        const id = Math.random()
        super(id)
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

    override pay(date?: Date) {
        super.pay()
        if (date) {
            this.paidAt = date
        }
    }
}

new PersistedPayment()

class User {
    name: string = 'user'

    constructor() {
        console.log(this.name)
    }
}

class Admin extends User {
    name: string = 'admin'

    constructor() {
        super()
        console.log(this.name + ' from admin constuctor')
    }
}

const person = new Admin()
console.log(person.name)

new Error('')

class HttpError extends Error {
    code: number

    constructor(message: string, code?: number) {
        super(message)
        this.code = code ?? 500
    }
}
