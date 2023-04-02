// Generic

/// function

interface Obj {
    x: number
}

type Arr = [number, number]

// function toArray(a: string, b: string): string[]
// function toArray(a: number, b: number): number[]
// function toArray(a: boolean, b: boolean): boolean[]
// function toArray(a: Obj, b: Obj): Obj[]
// function toArray(a: Arr, b: Arr): Arr[]

function toArray <T> (a: T, b: T) {
    return [a, b]
}

console.log(
    toArray('Neo', 'Anderson'), // ['Neo, 'Anderson']
    toArray<number>(1, 2), // This is also possible.
    toArray(true, false),
    toArray({ x:1 }, { y:2 }),
    toArray([1, 2], [3, 4, 5]), // number[]
    toArray<Arr>([1, 2], [3, 4, 5]) // error
)


/// class 

class UserP <P> {
    constructor(public payload: P) {}
    getPayload() {
        return this.payload
    }
}

interface UserAType {
    name: string
    age: number
    isValid: boolean
}

interface UserBType {
    name: string
    age: number
    emails: string[]
}

const heropyq = new UserP <UserAType> ({
    name: 'Heropy',
    age: 85,
    isValid: true,
    emails: [] // error
})

const neeo = new UserP <UserBType>({
    name: 'Neo',
    // Error occurs because there is no AGE
    emails: ['neo@gmail.com']
})


/// interface, Constraints

interface MyData <T1> { // <T1 extends string | number[]> This is also possible.
    name: string
    value: T1
}

const dataA: MyData <string> = {
    name: 'Data A',
    value: 'Hello world'
}

const dataB: MyData <number> = {
    name: 'Data B',
    value: 1234
}

const dataC: MyData <boolean> = {
    name: 'Data C',
    value: false
}

const dataD: MyData <number[]> = {
    name: 'Data D',
    value: [1, 2, 3, 4]
}