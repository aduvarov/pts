/* 
    Необходимо написать функцию сортировки любых
    объектов, которые имеют id по убыванию и по возврастанию
*/

interface IObject {
    id: number
}

const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
]

const data2 = [
    { id: 4, payment: true },
    { id: 34, payment: false },
    { id: 20, payment: true, incriment: false },
]

enum Direction {
    ASK = 'ask',
    DESC = 'desc',
}

function sortObjects<T extends IObject>(
    data: T[],
    direction: Direction = Direction.ASK
): T[] {
    data.sort((a, b) => {
        if (direction === Direction.ASK) {
            return a.id - b.id
        } else {
            return b.id - a.id
        }
    })
    return data
}

console.log(sortObjects(data))
console.log(sortObjects(data2, Direction.DESC))
