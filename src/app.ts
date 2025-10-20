function Uni(name: string): any {
    console.log(`Инициализация: ${name}`)
    return function () {
        console.log(`Вызов: ${name}`)
    }
}

@Uni('Класс')
class MyClass {
    @Uni('Свойство1')
    props1?: any

    @Uni('Свойство3')
    prop3?: any

    @Uni('Свойство static')
    static prop2?: any

    @Uni('Метод static')
    static method(@Uni('Параметр метода static') _: any) {}

    @Uni('Метод')
    method(@Uni('Параметр метода') _: any) {}

    constructor(@Uni('Параметр 2') _: any) {}
}
