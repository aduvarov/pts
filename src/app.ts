interface IUserService {
    users: number
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000

    @Log
    @LogF() // Фабрика
    getUsersInDatabase(): number {
        throw new Error('Ошибка')
    }
}

console.log(new UserService().getUsersInDatabase())

function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    descriptor.value = () => {
        console.log('no error')
    }
}

function LogF() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
        descriptor.value = () => {
            console.log('no error')
        }
    }
}
