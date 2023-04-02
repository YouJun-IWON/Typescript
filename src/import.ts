import { getFullName, User7 } from './user'

const heropy4: User7 = {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    isValid: true
}

const FullName = getFullName(heropy4)

console.log(FullName)
console.log(heropy4.isValid)