function test(a: any) {}

function test2(a: number): number | undefined {
    if (a > 0) {
        return a
    }
}

function test3(a: number): number {
    return a
}

type StrOrNumFunc = (a: number | string) => number

// let f: StrOrNumFunc = test3
// f('sdf')

class A {
    b: number

    test() {
        return function () {
            // this.b = 5
        }
    }
}

try {
} catch (error) {
    // console.log(error.message) // useUnknownInCatchVariables
}
