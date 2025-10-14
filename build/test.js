"use strict";
/*
    Необходимо написать функцию сортировки любых
    объектов, которые имеют id по убыванию и по возврастанию
*/
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
const data2 = [
    { id: 4, payment: true },
    { id: 34, payment: false },
    { id: 20, payment: true, incriment: false },
];
var Direction;
(function (Direction) {
    Direction["ASK"] = "ask";
    Direction["DESC"] = "desc";
})(Direction || (Direction = {}));
function sortObjects(data, direction = Direction.ASK) {
    data.sort((a, b) => {
        if (direction === Direction.ASK) {
            return a.id - b.id;
        }
        else {
            return b.id - a.id;
        }
    });
    return data;
}
console.log(sortObjects(data));
console.log(sortObjects(data2, Direction.DESC));
