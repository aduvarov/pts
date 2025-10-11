"use strict";
class User {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills = this.skills.concat(skillOrSkills);
        }
    }
}
const user1 = new User();
user1.addSkill('Dev');
user1.addSkill(['Dev', 'DevOps']);
console.log(user1);
