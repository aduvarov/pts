class User {
    name: string
    role?: 'admin' | 'user'
    constructor(name: string) {
        this.name = name
    }
}

function createUser(user: User) {
    //logic
    // const defaultUser = new User('default')
    // defaultUser.role = undefined

    switch (user.role) {
        // case 'admin':
        //     const a = 7

        case 'user':
            return true
        // const c = 1
    }
}

// function createAdmin(user: User) {}

interface IChecks {
    [check: string]: boolean
}

const c: IChecks = {}

const d = c['drive']
// c.drive
