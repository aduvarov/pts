let a = 5
let b: string = a.toString()
let e = new String(a) // String
let e2 = new String(a).valueOf() // string
let f: boolean = new Boolean(a).valueOf() // boolean

let c = 'sdfs'
let d: number = parseInt(c)

interface User {
    name: string
    email: string
    login: string
}

const user: User = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasya',
}

const user2 = {
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasya',
} as User

// valid но не рекомендуется
const user3 = <User>{
    name: 'Вася',
    email: 'vasiliy@yandex.ru',
    login: 'vasya',
}

interface Admin {
    name: string
    role: number
}

const admin: Admin = { ...user, role: 1 } // не рекомендуется

function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        role: 1,
    }
}

const admin2: Admin = userToAdmin(user)
