function logId(id: string | number): void {
    console.log(id)
}

const a = logId(1)

function multiply(f: number, s?: number): number | void {
    if (!s) {
        return f * f
    }
}

type voidFunction = () => void

const f1: voidFunction = () => {}

const f2: voidFunction = () => {
    return true
}

const skills = ['Dev', 'DevOps']
const user = {
    s: ['s'],
}

skills.forEach(skill => user.s.push(skill))
