interface IUserService {
    users: number
    getUsersInDatabase(): number
}

class UserService implements IUserService {
    users: number = 1000

    @Catch({ rethrow: false })
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

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: true }) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const method = descriptor.value
        descriptor.value = async (...args: [any]) => {
            try {
                return await method?.apply(target, args)
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message)
                    if (rethrow) {
                        throw e
                    }
                }
            }
        }
    }
}
