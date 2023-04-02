export interface User7 {
    firstName: string
    lastName: string
    age: number
    isValid: boolean
}

export function getFullName(user: User7) {
    return `${user.firstName} ${user.lastName}`
}