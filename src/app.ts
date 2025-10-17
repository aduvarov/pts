interface IUserService {
    users: number
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000

    getUsersInDatabase(): number {
        return this.users
    }
}

function nullUser(obj: IUserService) {
    obj.users = 0
    return obj
}

function logUsers(obj: IUserService) {
    console.log('Users: ' + obj.users)
    return obj
}

console.log(new UserService().getUsersInDatabase())
logUsers(nullUser(new UserService()))
