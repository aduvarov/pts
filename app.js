"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
}
const f1 = () => { };
const f2 = () => {
    return true;
};
const skills = ['Dev', 'DevOps'];
const user = {
    s: ['s'],
};
skills.forEach(skill => user.s.push(skill));
