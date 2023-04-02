// Alias

type TypeA = string
type TypeB = string | number | boolean

type Userr = {
    name: string
    age: number
    isValid: boolean
} | [string, number, boolean]

const userA1: Userr = {
    name: 'Neo',
    age: 85,
    isValid: true
}

const userB1: Userr = ['Evan', 36, false]

function someFunc(param: TypeB): TypeA {
    switch (typeof param) {
        case 'string' :
            return param.toUpperCase()
        case 'number' :
            return param.toFixed(2)
        default: 
            return true // error >>> string!
    }
}


// * interface and type

type TypeUser = { // There is an allocation operator. =
    name: string
    age: number
    isValid: boolean
}

interface interfaceUser {
    name: string 
    age: number
    isValid: boolean
}

// ?? : TypeUser, interfaceUser => Both possible
// There is no functional difference.
// However, recommend an interface made with Object Data.
const heropyy: ?? = {
    name: 'Heropy',
    age: 85,
    isValid: true
}