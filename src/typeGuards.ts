// type guard

function logText(el: Element) {
    console.log(el.textContent)
}

const h1El = document.querySelector('h1') as HTMLHeadElement
// Declarate that it is not null and eliminate error.
logText(h1El)

// But the above code generates an error on the web.This is because NULL data is actually entered.

// Solve as follows. (guard)
if (h1El) {
    logText(h1El)
}

// or
if (h1El instanceof HTMLHeadingElement) {
    //If it is not htmlheadingelement, the code below does not run.
    logText(h1El)
}

function addd(val: string | number | boolean) {
    let res = 'Result =>'
    if (typeof val === 'number') {
        res += val.toFixed(2)
    } 
    if (typeof val === 'string') {
        res += val.toUpperCase()
    }
    console.log(res)
}

addd(3.141592) // Result => 3.14
addd('hello world') // Result => HELLO WORLD
