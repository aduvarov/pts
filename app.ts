type httpMethod = 'post' | 'get'

type coolString = string

function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
    return 1
}

let user: {
    name: string
    age: number
    skills: string[]
} = {
    name: 'asdf',
    age: 33,
    skills: ['1', '1'],
}

type User = {
    name: string
    age: number
    skills: string[]
}

let user2: User = {
    name: 'Anatoliy',
    age: 44,
    skills: ['1', '2'],
}

type Role = {
    id: number
}

type UserWithRole = User & Role // Intersection Type

let user3: UserWithRole = {
    name: 'Ivan',
    age: 44,
    skills: ['1'],
    id: 2,
}
