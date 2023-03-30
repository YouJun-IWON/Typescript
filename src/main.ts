let hello: string = 'Hello world!'
// let hello: string = 123 >>> typescript make error 

hello = '123'

console.log(hello)


// type

/// string
let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string = `My color is ${red}.`
let yourColor: string = 'Your color is' + green

/// number
let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

/// boolean
let isBoolean: boolean
let isDone: boolean = false


/// Null / Undefined
let nul: null
// No data entered.
let und: undefined
// It contains data called undefined.
nul = null
console.log(nul)
// nul needs to be initialized separately as above. Only null is possible. It is unnecessary, so this method is rarely used.
console.log(und)


/// array
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const numbers: number[] = [1, 2, 3, 4, 5, 6]
const union: (string|number) [] = ['Apple', 1, 2, 'Banana', 3]
// const array: [] = [1,2,3] >>> error 

/// object
// typeof DATA === 'object'
const obj: object = {}
const arr: object = []
const func: object = function () {}

interface User {
    name: string
    age: number
    isValid: boolean
}

const userA: User = {
    name: 'Heropy',
    age: 85,
    isValid: true
}

const userB: {
    name: string
    age: number
    isValid: boolean
} = {
    name: 'Neo',
    age: 22,
    isValid: false
}

/// function
const add: (x: number, y: number) => number = function (x, y) {
    return x + y
}

const add1 = function (x: number, y: number): number {
    return x + y
}
const a: number = add(1,2)
// An error occurs when number is converted to a string.

const Hello: () => void = function () {
    console.log('Hello world~')
}
// In the case above, javascript returns undefined, but typescript returns void.
const Hello1 = function (): void {
    console.log('Hello world~')
}

const h: void = Hello1()

/// Any
// All types are possible. However, in this case, there is no reason to use typescript, so it is rarely used.
let hello3: any = 'Hello world'
hello3 = 123
hello3 = false
hello3 = null
hello3 = {}
hello3 = []
hello3= function () {}


/// Unknown
const z: any = 123
const u: unknown = 123

// When z is changed to u, all errors occur except for 'any'.
// In other words, it is better to use 'unknown' rather than 'any'.
const any: any = z
const boo: boolean = z
const num2: number = z
const arr1: string[] = z
const obj1: { x: string, y:number } = z



/// Tuple
const tuple: [string, number, boolean] = ['a', 1, false]
// The difference from array is that it must have the same shape as set in tuple.
const users: [number, string, boolean] []
    = [[1, 'NEO', true], [2, 'Evan', false], [3, 'Lewis', true]]

/// Void
// When a function has no return value, it must be set to void.
function hallo(msg: string): void {
    console.log(`Hello ${msg}`)
}

function hallo1(msg: string): undefined {
    console.log(`Hello ${msg}`)
    return undefined
}

/// Never
// a value that will never happen
const nev: [] = []
// nev.push(3) >>> error

/// Union
let union1: string | number
union1 = 'Hello type'
union1 = 123
// union1 = false >>> error 

let union2: (string | number | boolean) []

/// Intersection
interface User1 {
    name: string, 
    age: number
}
interface Validation {
    isValid: boolean
}
const heropy: User & Validation = {
    name: 'Neo',
    age: 85,
    isValid: true
}

