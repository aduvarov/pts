class UserService {
    static db: any

    constructor(id: number) {}
    static async getUser(id: number) {
        return UserService.db.findById(id)
    }

    create() {}

    static {
        UserService.db = 'sdf'
    }
}

UserService.db
UserService.getUser(1)
const inst = new UserService(1)
inst.create()
