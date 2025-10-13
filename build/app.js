"use strict";
function test(a) { }
function test2(a) {
    if (a > 0) {
        return a;
    }
}
function test3(a) {
    return a;
}
// let f: StrOrNumFunc = test3
// f('sdf')
class A {
    test() {
        return function () {
            // this.b = 5
        };
    }
}
try {
}
catch (error) {
    // console.log(error.message) // useUnknownInCatchVariables
}
