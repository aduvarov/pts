/*
        Необходимо написать функцию toString, которая принимает любой тип
        и возвращает его строковое представление. Если не может, то
        возвращает undefined
*/

function toString<T>(data: T): string | undefined {
    let result: string | undefined = undefined

    switch (typeof data) {
        case 'string':
            result = data
            break
        case 'number':
            result = data.toString()
            break
        case 'bigint':
            result = data.toString()
            break
        case 'boolean':
            result = data.toString()
            break
        case 'symbol':
            result = data.toString()
            break
        case 'function':
            result = data.toString()
            break
        case 'object':
            if (Array.isArray(data)) {
                result = data.toString()
            } else if (data === null) {
                result = 'null'
            } else {
                result = JSON.stringify(data)
            }
            break
    }
    return result
}

const res = toString(undefined)
console.log('res ==> ', res)
