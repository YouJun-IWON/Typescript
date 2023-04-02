// Assertion (Type)
// 'Assurance' - said it without hesitation.

// assert keyword - as 
// Non-null assertion operator - !

// 1)
const el = document.querySelector('body')
// el.textContent = 'Hello world?!' >>> error Because <body> may not have content

// However, if you clearly indicate that it is the body element of html as shown below, the error does not occur.
const ell = document.querySelector('body') as HTMLBodyElement
ell.textContent = 'Hello world?!'

const elll = document.querySelector('body')
elll!.textContent = 'Hello world?!'
// Assertion that it is not null through the exclamation mark
const ellll = document.querySelector('.title')
if(ellll) {
    ellll.textContent = 'Hello world!'
}
// Even as above, the error can be solved.(A way of not assigning) (type guard)




// 2)
function getNumber(x: number | null | undefined) {
    return Number(x.toFixed(2))
    // The method called Tofixed can only be used in Number.Because of this, an error occurs.
}

getNumber(3.141592)
getNumber(null)

function getNumber11(x: number | null | undefined) {
    return Number((x as number).toFixed(2))
}

function getNumber111(x: number | null | undefined) {
    return Number(x!.toFixed(2))
    // This part is a problem if the value of X is NULL.
    // This is not a problem because the user has asserted in TypeScript, but it generates error on the web.
}

getNumber11(3.141592)
getNumber11(null) // When running the compilation, error occurs in this part.

// The above error is solved as follows.
function getNumber1111( x: number | null | undefined) {
    if (x) {
        return Number(x.toFixed(2))
    }
}



// 3)
function getValue(x: string | number, isNumber: boolean) {
    if (isNumber) {
        return Number(x.toFixed(2))
    }
    return x.toUpperCase()
    // Error occurs for the above reasons
}

getValue('hello world', false) // 'HELLO WORLD'
getValue(3.141592, true) // 3.14

function getValue11(x: string | number, isNumber: boolean) {
    if (isNumber) {
        return Number((x as number).toFixed(2))
    }
    return (x as string).toUpperCase()
}
// You can't use the exclamation mark here. The exclamation mark is only available when NULL and undefined.

getValue('hello world', false) // 'HELLO WORLD'
getValue(3.141592, true) // 3.14

