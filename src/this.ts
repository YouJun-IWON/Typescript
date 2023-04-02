// function - Explicit this

interface Cat {
    name: string
    age: number
}

const cat: Cat = {
    name: 'Lucy',
    age: 3
}

function helloo (this: Cat, message: string) { // Specifies 'this'. 
    console.log(`Hello ${this.name}, ${message}`)
    // 'This' in the general function is defined according to the location of the call.
}

// call : Use directly behind functions or methods to determine which object will run.
helloo.call(cat, 'You are pretty awesome!')
// Hello Lucy, You are pretty awesome! 