class User {
    _login: string
    _password: string

    set login(l: string) {
        this._login = 'user-' + l
    }

    get login() {
        return 'no_login'
    }

    set password(p: string) {
        // only sync functions in getters or setters
    }
}

const user = new User()
user.login = 'Ivan'
console.log(user)
console.log(user.login)
