interface User {
    name: string
}

const a = { name: 'asdf' }

assertUser(a)
a.name = 'Вася'

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return
    }
    throw new Error('Не пользователь')
}
