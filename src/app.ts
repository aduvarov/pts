// import { A } from './module/app2'
import run, { a, MyType2 } from './module/app2'
import running from './module/app2'
import * as all from './module/app2'
import { Test as Cl } from './module/app2'
import { MyType as T } from './module/app2'
import type { MyType } from './module/app2'
import { a as b, type MyType as MyTypeB } from './module/app2'

// console.log(A.a)
console.log(a)
run()
running()
console.log(all.a)
new Cl()
const x: T = 4
console.log(x)
const y: MyType2 = 44
console.log(y)
console.log(b)
const d: MyType = 'sdf'
console.log(d)
const e: MyTypeB = '4444'
console.log(e)
