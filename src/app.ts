interface Role {
    name: string
}

interface Permission {
    endDate: Date
}
interface User {
    name: string
    roles: Role[]
    permission: Permission
}

const user: User = {
    name: 'Вася',
    roles: [],
    permission: {
        endDate: new Date(),
    },
}

const nameUser = user['name']
const roleNames = 'roles'

type rolesTypes = User['roles']
// type roleType2 = User[roleNames] // Error
type rolesType2 = User[typeof roleNames] // only for const or let roleNames: 'roles' = 'roles'

type roleType = User['roles'][number]
type dateType = User['permission']['endDate']

const roles = ['admin', 'user', 'super-user'] as const
type roleTypes = (typeof roles)[number]
