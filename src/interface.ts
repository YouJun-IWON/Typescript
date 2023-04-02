// interface

// * Optional attribute - ?
// * Read-only properties - readonly

interface User { // PASCAL notation
    name: string
    readonly age: number
    isValid?: boolean
}
// The code you provided does not show any errors. However, it is possible that an error may occur if you are trying to use the isValid property in a way that is not allowed, since it is marked as optional with the ? syntax. 
// If you try to access the isValid property on the neo object, it will result in undefined, because the property was not defined in the object.

// It must be matched with the attributes of the interface.
const heropy1: User = {
    name: 'Heropy',
    age: 85,
    isValid: true
}

heropy1.isValid = false
// 'AGE' cannot be modified due to the 'readonly' properties.'Error' occurs
heropy1.age = 22 

const neo: User = {
    name: 'Neo',
    age: 120
}

// * unction - Call Signature

// interface GetName { // Function
//     (message: string): string // Call Signature
// }

interface User2 {
    name: string
    age1: number
    //getName: GetName
    getName: (message: string) => string
    // It doesn't matter if the parameter names are different. (message)
}

const heropy11: User2 = {
    name: 'Heropy',
    age1: 85,
    getName(message: string) {
        console.log(message)
        return this.name
    }
}

heropy11.getName('Hello~')


// * Index possible type - Index Signature

// array
interface Fruits {
    [item: number]: string
}

const fruits1: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits1[1]) // "Banana"

//object
interface User3 {
    [key: string]: unknown // Index Signature
    // unknown: Make sure this get any value.
    name: string
    age: number
}

const heropy2: User3 = {
    name: 'Heropy',
    age: 85
}

heropy2['isValid'] = true
heropy2['emails'] = ['thesecon@gmail.com', 'test@gmail.com']
console.log(heropy2)


interface Payload {
    [key: string]: unknown
}

function logValues(payload: Payload) {
    for (const key in payload) {
        console.log(payload[key])
    }
}

interface User4 {
    [key: string]: unknown 
    // To be applied to the above function, need to put the above code to make an indexable type.
    name: string
    age: number
    isValid: boolean
}

const heropy3: User4 = {
    name: 'heropy3',
    age: 85,
    isValid: true
}

logValues(heropy3)

// * Expansion (inheritance)

interface UserA {
    name: string
    age: number
}

interface UserB extends UserA {
    isValid: boolean
}

// error
const heropyA: UserA = {
    name: 'Heropy',
    age: 85,
    isValid: true
}

// no error
const neoo: UserB = {
    name: 'Neo',
    age: 102,
    isValid: true
}

// Can make several in the same name. However, other attributes are not allowed in the same variable.
interface FullName {
    firstName: string
    lastName: string
}

interface FullName {
    middleName: string
    lastName: boolean // error
}

const FullName: FullName = {
    firstName: 'Tomas',
    middleName: 'Sean',
    lastName: 'Connery'
}



