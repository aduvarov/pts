class User {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

class Users extends Array<User> {
    searchByName(name: string) {
        return this.filter(u => u.name === name)
    }
}

const users = new Users()

users.push(new User('Вася'))
console.log(users.toString())

class UsersList {
    users: User[]

    push(u: User) {
        this.users.push(u)
    }
}

class Payment {
    data: Date
}

class UserWithPayment extends Payment {
    // Не рекомендуется разная предметная область
    name: string
}

class UserWithPayment2 {
    user: User
    payment: Payment

    constructor(user: User, payment: Payment) {
        this.user = user
        this.payment = payment
    }
}
