// dts file

declare module 'lodash' {
    interface Lodash {
        camelCase: (str: string) => string
        snakeCase: (str: string) => string
    }

    const _: Lodash
    export default _
}

// There is the same way as above, but it is difficult to specify a type every time.

// npm info @types/lodash >>> First identify the presence of existence.if there is
// npm i @types/lodash -D >>> This does not have to make this file.