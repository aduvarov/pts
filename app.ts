function getFullName(firstname, surname) {
    return `${firstname} ${surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}

console.log(getFullName('Анатолий', 'Уваров'))
