class User {
    skills: string[] = []

    addSkill(skill: string): void
    addSkill(skills: string[]): void
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills)
        } else {
            this.skills = this.skills.concat(skillOrSkills)
        }
    }
}

const user1 = new User()

user1.addSkill('Dev')
user1.addSkill(['Dev', 'DevOps'])
console.log(user1)
