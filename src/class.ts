// class

// Access Modifiers
/// public - Free accessible anywhere, omitted from class body (default), However, it cannot be omitted when used in parameters.
/// protected - Access within the descendant class derived from me
/// private - Access only from own class

class UserA1 {
    // first : string = '' // public
    // protected last: string
    // private age: number = 0

    // 'Class' of 'TypeScript' must create 'Type' in the properties above 'Constructor'.Initialization is also possible.
    constructor(public first: string = '', public last: string = '', public age: number = 0) {
        // this.first = first
        // this.last = last
        // this.age = age
    }

    protected getAge() {
        return `${this.first} ${this.last} is ${this.age}`
    }
}

class UserB1 extends UserA1 {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`
        // age >>> error
    }
}

class UserC extends UserB1 {
    getAge() {
        return `${this.first} ${this.last} is ${this.age}`
        // age >>> error
    }
}

const nneo = new UserA1('Neo', 'Anderson', 102)
console.log(nneo.first)
console.log(nneo.last) // error >>> protected
console.log(nneo.age) // error >>> private
nneo.getAge() // error protected