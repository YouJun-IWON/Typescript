// function - overloading

// * 1) 
function add0 (a: string, b: string) {
    return a + b
}

function add9 (a: number, b: number) {
    return a + b
}

add0('hello', 'world~') // 'hello world'
add9(1, 2) // 3
add0('hello', 2) // error
add9('hello', 2) // error


// * 2)

function add8(a: string, b: string): string // Type Declaration
function add8(a: number, b: number): number // Type Declaration
function add8(a: any, b: any) { // Function implementation
    return a + b
}

add8('hello', 'world~') // 'hello world~'
add8(1, 2) // 3
add8('hello', 2) // error
add8(2, 'world~') // error