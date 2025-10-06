function getFullName(userEntity: { firstname: string; surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`
}

const getFullNameArrow = (firstname: string, surname: string): string => {
    return `${firstname} ${surname}`
}

const user = {
    firstname: 'Анатолий',
    surname: 'Уваров',
    city: 'Караганда',
    age: 44,
    skills: {
        dev: true,
        devops: true,
    },
}

console.log(getFullName(user))
