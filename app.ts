@ClassDec
class Demo {
    @FieldDec
    name: string = 'test'
    private _surname!: string

    @isString
    set surname(value: string) {
        this._surname = value
    }

    @Max(10)
    exec(a: number) {
        console.log(a)
    }
}

function ClassDec<This, Args extends any[]>(
    target: new (...args: Args) => This,
    context: ClassDecoratorContext<new (...args: Args) => This>
) {
    console.log('Init class')
}

function FieldDec<This, Args extends any[], Return>(
    target: undefined,
    context: ClassFieldDecoratorContext<This, string>
) {
    console.log('Init field')
    return function (value: string) {
        console.log('Init field function')
        return value
    }
}

function isString<This, Value>(
    target: (this: This, value: Value) => void,
    context: ClassSetterDecoratorContext<This, Value>
) {
    console.log('Init setter decorator')
    console.log(context)
    context.addInitializer(() => {
        console.log('Initializer')
    })
    return function (this: This, value: Value): void {
        if (typeof value !== 'string') {
            throw new Error('Значение должно быть строкой')
        }
        target.call(this, value)
    }
}

function methodDec<This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
) {
    console.log('Init method')
    return function (this: This, ...args: Args): Return {
        const res = target.call(this, ...args)
        return res
    }
}

function Max(num: number) {
    return function <This, Args extends any[], Return>(
        target: (this: This, ...args: Args) => Return,
        context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
    ) {
        return function (this: This, ...args: Args): Return {
            if (args[0] > num) {
                throw new Error(`Значение больше ${num}`)
            }
            const res = target.call(this, ...args)
            return res
        }
    }
}

const demo = new Demo()
demo.exec(1)
// demo.exec(11)
//demo.surname = 1 as unknown as string
